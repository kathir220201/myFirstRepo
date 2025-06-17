Survey.StylesManager.applyTheme('modern');

const json = {
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "text",
                    "name": "Name_of_doctor",
                    "title": "Name of the doctor",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "regex",
                            "text": "Enter valid name",
                            "regex": "^[A-Za-z\\s'-]{2,50}$"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "Speciality",
                    "isRequired": true,
                    "choices": [
                        "Cardiologist",
                        "Diabetologist",
                        "Endocrinologist",
                        "Consulting Physician"
                    ]
                }
            ]
        },
        {
            "name": "page2",
            "elements": [
                {
                    "type": "text",
                    "name": "Qualification",
                    "isRequired": true
                },
                {
                    "type": "radiogroup",
                    "name": "City",
                    "title": "City",
                    "isRequired": true,
                    "choices": [
                        "Delhi",
                        "Mumbai",
                        "Kolkata",
                        "Chennai",
                        "Hyderabad",
                        "Bengaluru",
                        "Pune",
                        "Ahmedabad"
                    ]
                }
            ]
        },
        {
            "name": "page3",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "Type_of_City",
                    "title": "Type of City",
                    "isRequired": true,
                    "choices": [
                        "Metro",
                        "Semi-Metro"
                    ]
                }
            ]
        },
        {
            "name": "page4",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "Practice_type",
                    "title": "Practice type",
                    "isRequired": true,
                    "choices": [
                        "Only Clinic",
                        "Only Hospital",
                        "Both"
                    ]
                }
            ]
        },
        {
            "name": "page5",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "Name_of_Hospital",
                    "title": "Name of the hospital",
                    "isRequired": true,
                    "choices": [
                        "Private",
                        "Public",
                        "Trust"
                    ]
                },
                {
                    "type": "text",
                    "name": "question2",
                    "visibleIf": "{Name_of_Hospital} contains 'Private'",
                    "title": "Private specify"
                },
                {
                    "type": "text",
                    "name": "question4",
                    "visibleIf": "{Name_of_Hospital} contains 'Trust'",
                    "title": "Trust  Specify"
                },
                {
                    "type": "text",
                    "name": "question3",
                    "visibleIf": "{Name_of_Hospital} contains 'Public'",
                    "title": "Public Specify"
                }
            ]
        },
        {
            "name": "page6",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "Private_Hospital",
                    "title": "Private Hospital",
                    "isRequired": true,
                    "choices": [
                        "Corporate Chain of Hospital",
                        "Standalone"
                    ]
                }
            ]
        },
        {
            "name": "page7",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "Total_yr_experience",
                    "visibleIf": "{Name_of_Hospital} contains 'Private'",
                    "title": "Total Years of Experience",
                    "isRequired": true,
                    "choices": [
                        "<5",
                        "5-10",
                        "11-20",
                        ">20"
                    ]
                }
            ]
        },
        {
            "name": "page8",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "Q1",
                    "title": "Q1. How many total patients do you consult in a day?",
                    "isRequired": true,
                    "choices": [
                        "Up to 10",
                        "11-20",
                        "21-30",
                        "31-40",
                        "41-50"
                    ]
                }
            ]
        },
        {
            "name": "page9",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "Q2",
                    "title": "Q2.  NMC/MMC is making CME credit points mandatory while UCPMP guidelines prohibit industry on delegating logistic support. This leads to minimal incentivization on CME for a doctor. How do you as a doctor cope up with the new normal?",
                    "isRequired": true,
                    "choices": [
                        "Self-learning",
                        "Learning from peers or senior colleague",
                        "Local CMEs (society-based conferences which are local / regional e.g. IMA chapters, RSSDI chapters etc.)",
                        "Industry sponsored (Education without involvement of any society banner)",
                        "Industry sponsored (Education under society banner)"
                    ]
                }
            ]
        },
        {
            "name": "page10",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question1",
                    "title": "Q2_1",
                    "description": "Q2.1 . Which Industry sponsored (Education under society banner)",
                    "isRequired": true,
                    "choices": [
                        "International",
                        "Indian",
                        "Both"
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "Q3",
                    "title": "Q3. How many invitations do you receive for CVD focused programs sponsored by pharma companies per month (on average)?",
                    "isRequired": true,
                    "choices": [
                        "0-5",
                        "6-10",
                        "11 - 25",
                        ">25"
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "Q4",
                    "title": "Q4. How many of these programs do you attend/participate in or get enrolled in per month?\n",
                    "isRequired": true,
                    "choices": [
                        "0-2",
                        "3-5",
                        ">5"
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "Q5_1",
                    "title": "Q5_1. Have you received education from the following societies since last 1 year? ",
                    "choices": [
                        "ACC (American Academy of Cardiology)",
                        "ADA (American Diabetes Association)",
                        "AHA (American Heart Association)",
                        "ESC (European Society of Cardiology)",
                        "EASD (European Association for the Study of Diabetes)",
                        "ESH (European Society of Hypertension)",
                        "AACE (American Association of Clinical Endocrinologists)",
                        "ES (Endocrine Society)",
                        "ACP (American College of Physicians)",
                        "CSI (Cardiological Society of India)",
                        "RSSDI (Research Society for the Study of Diabetes in India)",
                        "DI (Diabetes India)",
                        "ASI (Association of Surgeons of India)",
                        "Others, Please specify"
                    ]
                }
            ]
        },
        {
            "name": "page11",
            "elements": [
                {
                    "type": "matrix",
                    "name": "Q5_2",
                    "title": "Q5_2. What type(s) of educational formats did you receive from the selected society/societies?\n",
                    "columns": [
                        "Redelivery of their annual meeting/congress sessions",
                        "Need based programs (live/virtual)",
                        "Online certificate course"
                    ],
                    "rows": [
                        "ACC (American Academy of Cardiology)",
                        "ADA (American Diabetes Association)",
                        "AHA (American Heart Association)",
                        "ESC (European Society of Cardiology)",
                        "EASD (European Association for the Study of Diabetes)",
                        "ESH (European Society of Hypertension)",
                        "AACE (American Association of Clinical Endocrinologists)",
                        "ES (Endocrine Society)",
                        "ACP (American College of Physicians)",
                        "CSI (Cardiological Society of India)",
                        "RSSDI (Research Society for the Study of Diabetes in India)",
                        "DI (Diabetes India)",
                        "ASI (Association of Surgeons of India)",
                        "Others, Please specify"
                    ]
                }
            ]
        },
        {
            "name": "page12",
            "elements": [
                {
                    "type": "matrix",
                    "name": "Q5_3",
                    "title": "Q5_3. Please specify the Sponsor name",
                    "columns": [
                        "Column1"
                    ],
                    "rows": [
                        "Row 1",
                        "Row 2"
                    ]
                }
            ]
        },
        {
            "name": "page13",
            "elements": [
                {
                    "type": "multipletext",
                    "name": "Q6",
                    "title": "Q6. Which pharma companies do you feel brings the most credible or high-quality CVD programs that help in elevating your clinical practice?",
                    "items": [
                        {
                            "name": "text1",
                            "title": "text1"
                        },
                        {
                            "name": "text2"
                        },
                        {
                            "name": "text3"
                        },
                        {
                            "name": "text4"
                        },
                        {
                            "name": "text5"
                        }
                    ]
                }
            ]
        },
        {
            "name": "page14",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "Q7",
                    "title": "Q7. What would motivate you most to participate in a CVD education program ?",
                    "choices": [
                        "Credible / unbiased education delivered by profound societies",
                        "CME credit points",
                        "Networking with experts and peers",
                        "To get latest development and learnings",
                        "Others, Please specify"
                    ]
                }
            ]
        },
        {
            "name": "page15",
            "elements": [
                {
                    "type": "multipletext",
                    "name": "Q8",
                    "title": "Q8. What are some of the key unmet educational needs in the CVD domain that you think are under-represented?",
                    "items": [
                        {
                            "name": "text1",
                            "title": "text1"
                        },
                        {
                            "name": "text2"
                        },
                        {
                            "name": "text3"
                        },
                        {
                            "name": "text4"
                        },
                        {
                            "name": "text5"
                        }
                    ]
                }
            ]
        },
        {
            "name": "page16",
            "elements": [
                {
                    "type": "multipletext",
                    "name": "Q9",
                    "title": "Q9. What are the emerging topics/indications in the CVD domain that should be considered in CMEs?",
                    "items": [
                        {
                            "name": "text1",
                            "title": "text1"
                        },
                        {
                            "name": "text2"
                        },
                        {
                            "name": "text3",
                            "title": "text3"
                        },
                        {
                            "name": "text4",
                            "title": "text4"
                        },
                        {
                            "name": "text5",
                            "title": "text5"
                        }
                    ]
                }
            ]
        },
        {
            "name": "page17",
            "elements": [
                {
                    "type": "multipletext",
                    "name": "Q10",
                    "title": "Q10. Which CVD program is on top of your mind which you intend to participate every year/year-on-year?",
                    "items": [
                        {
                            "name": "text1"
                        },
                        {
                            "name": "text2"
                        }
                    ]
                }
            ]
        }
    ],
    "headerView": "advanced"
};
// ✅ Create the Survey Model
const survey = new Survey.Model(json);

survey.onValidateQuestion.add(function (survey, options) {
    const qName = options.name;
    const value = options.value;

    if (qName === "Qualification") {
        if (!value || value.trim().length < 2) {
            options.error = "Please enter a valid qualification (min 2 characters)";
        }
    }
    if (qName === "City") {
        if (value == "Delhi" || value == "Mumbai" || value == "Kolkata" || value == "Chennai") {
            survey.setValue("Type_of_City", "Metro");
        }
        else {
            survey.setValue("Type_of_City", "Semi-Metro");
        }

    }

});

// survey.onValueChanged.add(function (sender, options) {
//     if (options.name === "Q2") {
//         if ((document.querySelector('input[name="Q2"][value="Industry sponsored (Education under society banner)"]').checked) == false) {
//             survey.doComplete();
//         }
//     }
// });



// ✅ Optional: On survey completion, send to backend
survey.onComplete.add((sender) => {
    const surveyData = sender.data;

    fetch("http://127.0.0.1/Survey_Js/save_survey.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(surveyData)
    })
        .then(response => response.json())
        .then(result => {
            console.log("Server response:", result);
            document.querySelector('#surveyResult').innerHTML =
                "<pre>" + JSON.stringify(result, null, 2) + "</pre>";
        })
        .catch(error => {
            console.error("Error submitting survey:", error);
        });
});

// ✅ Render the survey using React
ReactDOM.render(<Survey.Survey model={survey} />, document.getElementById('surveyElement'));

