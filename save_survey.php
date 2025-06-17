<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$host = 'localhost';
$db = 'surveyjs';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $jsonInput = file_get_contents("php://input");
    $data = json_decode($jsonInput, true);
    if (!is_array($data)) {
        throw new Exception("Invalid JSON input.");
    }

    // Save full JSON
    $stmt = $pdo->prepare("INSERT INTO full_json_data (json_data) VALUES (:json)");
    $stmt->execute([':json' => json_encode($data)]);
    $fullJsonId = $pdo->lastInsertId();

    $flatData = [];
    $shortKeyCounter = 1;

    function flatten($prefix, $value, &$flatData)
    {
        if (is_array($value)) {
            if (array_keys($value) === range(0, count($value) - 1)) {
                foreach ($value as $item) {
                    if (is_string($item)) {
                        $label = preg_replace('/[^a-zA-Z0-9]/', '_', substr($item, 0, 20));
                        $flatData[$prefix . '_' . $label] = 1;
                    }
                }
            } else {
                foreach ($value as $k => $v) {
                    flatten($prefix . '_' . preg_replace('/[^a-zA-Z0-9]/', '_', $k), $v, $flatData);
                }
            }
        } else {
            $flatData[$prefix] = $value;
        }
    }

    foreach ($data as $key => $value) {
        $cleanKey = preg_replace('/[^a-zA-Z0-9]/', '_', $key);
        flatten($cleanKey, $value, $flatData);
    }

    $columns = [];
    $placeholders = [];
    $values = [':full_json_id' => $fullJsonId];

    foreach ($flatData as $longKey => $val) {
        $shortKey = substr($longKey, 0, 60);
        if (strlen($shortKey) > 64) {
            $shortKey = substr($shortKey, 0, 64);
        }

        // Add mapping
        $check = $pdo->prepare("SELECT id FROM key_mapping WHERE short_key = :skey");
        $check->execute([':skey' => $shortKey]);
        if ($check->rowCount() == 0) {
            $stmt2 = $pdo->prepare("INSERT INTO key_mapping (short_key, full_key) VALUES (:skey, :fkey)");
            $stmt2->execute([':skey' => $shortKey, ':fkey' => $longKey]);
        }

        // Add column if needed
        $checkCol = $pdo->prepare("SHOW COLUMNS FROM dynamic_json_data LIKE :col");
        $checkCol->execute([':col' => $shortKey]);
        if ($checkCol->rowCount() == 0) {
            $pdo->exec("ALTER TABLE dynamic_json_data ADD `$shortKey` TEXT");
        }

        $columns[] = "`$shortKey`";
        $placeholders[] = ":$shortKey";
        $values[":$shortKey"] = is_array($val) ? json_encode($val) : $val;
    }

    // Build query
    $sql = "INSERT INTO dynamic_json_data (full_json_id, " . implode(',', $columns) . ") VALUES (:full_json_id, " . implode(',', $placeholders) . ")";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($values);

    echo json_encode(["status" => "success", "full_json_id" => $fullJsonId]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
