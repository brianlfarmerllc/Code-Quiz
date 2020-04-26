// Setting the body to variable
var body = document.body;

// Variables for creating elements
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var allBtn = [btn1, btn2, btn3, btn4];
var input = document.createElement("input")
var btn5 = document.createElement("button")

// Attributes of class and id's set to created button elements 
btn1.setAttribute("class", "aButtons");
btn2.setAttribute("class", "aButtons");
btn3.setAttribute("class", "aButtons");
btn4.setAttribute("class", "aButtons");
input.setAttribute("class", "hsInput");
input.setAttribute("id", "enterI");
input.setAttribute("placeholder", "Enter Initials");
btn5.setAttribute("class", "hsSubmit");
btn5.setAttribute("id", "submitI");

// List of variable selectors listed from top to bottom
var timer = document.getElementById("timer")
var homeSection = document.getElementById("homeSection");
var H1 = document.getElementById("homeH1");
var clear = document.getElementById("clear")
var H3 = document.getElementById("homeH3");
var startQ = document.getElementById("homeBtn");
var answerChoices = document.getElementById("answerOptions")
var done = document.getElementById("allDone");
var enter = document.getElementById("enter");
var finalScore = document.getElementById("finalScore");
var isRW = document.getElementById("isRW");

// Questions displayed throughout the game
var qArray = [
    "Finish the quote...Boy have you lost your mind cause I'll help you _________",
    "What did Michael hit Meredith with?",
    "What type of farm does Dwight own?",
    "What is Kevin's family Recipe",
    "Who is not a Cast Character on the show?"
];
// Answers Array
var aArray = ["Find It", "His Car", "Beet Farm", "Chile", "Michael Scarn"];

// begining score timer
var scoreSec = 100;


startQ.addEventListener("click", function () {

    var scoreTimer = setInterval(function () {
        timer.textContent = "Time: " + scoreSec;
        // scoreSec--;
        

    }, 1000);

    question1();
})

function question1() {
    clear.innerHTML = "";
    H1.setAttribute("style", "text-align: start");
    H1.textContent = qArray[0]

    for (let i = 0; i < allBtn.length; i++) {
        answerChoices.appendChild(allBtn[i]);
    }
    btn1.textContent = "Out Brother";
    btn2.textContent = aArray[0];
    btn3.textContent = "Build A Boat";
    btn4.textContent = "If You Need Help";

    btn1.addEventListener("click", function (evet) {
        event.stopPropagation();
        if (btn1.textContent === aArray[0]) {
            isRW.textContent = "Previous Answer Was Correct!";
            question2();
        } else {
            isRW.textContent = "Previous Answer Was Correct!";
            scoreSec = scoreSec - 10;
            question2();
        }
    })
    btn2.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn2.textContent === aArray[0]) {
            isRW.textContent = "Previous Answer Was Correct!";
            question2();
        } else {
            isRW.textContent = "Previous Answer Was Wrong!";
            scoreSec = scoreSec - 10;
            question2();
        }
    })
    btn3.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn3.textContent === aArray[0]) {
            isRW.textContent = "Previous Answer Was Correct!";
            question2();
        } else {
            isRW.textContent = "Previous Answer Was Wrong!";
            scoreSec = scoreSec - 10;
            question2();
        }
    })
    btn4.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn4.textContent === aArray[0]) {
            isRW.textContent = "Previous Answer Was Correct!";
            question2();
        } else {
            isRW.textContent = "Previous Answer Was Wrong!";
            scoreSec = scoreSec - 10;
            question2();
        }
    })
   
}
function question2() {
    H1.setAttribute("style", "text-align: start");
    H1.textContent = qArray[1];

    for (let i = 0; i < allBtn.length; i++) {
        answerChoices.appendChild(allBtn[i]);
    }
    btn1.textContent = "A Roll of Toilet Paper";
    btn2.textContent = "Cupid's Arrow";
    btn3.textContent = "A Stapler";
    btn4.textContent = aArray[1];

    btn1.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn1.textContent === aArray[1]) {
            isRW.textContent = "Previous Answer Was Correct!";
            question3();
        } else {
            isRW.textContent = "Previous Answer Was Correct!";
            scoreSec = scoreSec - 10;
            question3();
        }
    })
    btn2.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn2.textContent === aArray[1]) {
            isRW.textContent = "Previous Answer Was Correct!";
            question3();
        } else {
            isRW.textContent = "Previous Answer Was Wrong!";
            scoreSec = scoreSec - 10;
            question3();
        }
    })
    btn3.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn3.textContent === aArray[1]) {
            isRW.textContent = "Previous Answer Was Correct!";
            question3();
        } else {
            isRW.textContent = "Previous Answer Was Wrong!";
            scoreSec = scoreSec - 10;
            question3();
        }
    })
    btn4.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn4.textContent === aArray[1]) {
            isRW.textContent = "Previous Answer Was Correct!";
            question3();
        } else {
            isRW.textContent = "Previous Answer Was Wrong!";
            scoreSec = scoreSec - 10;
            question3();
        }
    })
}
function question3() {
    H1.setAttribute("style", "text-align: start");
    H1.textContent = qArray[2];

    for (let i = 0; i < allBtn.length; i++) {
        answerChoices.appendChild(allBtn[i]);
    }
    btn1.textContent = "A Cattle Ranch";
    btn2.textContent = "Soy Bean Farm";
    btn3.textContent = "Beet Farm";
    btn4.textContent = "A Bunny Ranch";

    btn1.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn1.textContent === aArray[2]) {
            isRW.textContent = "Previous Answer Was Correct!";
            question4();
        } else {
            isRW.textContent = "Previous Answer Was Correct!";
            scoreSec = scoreSec - 10;
            question4();
        }
    })
    btn2.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn2.textContent === aArray[2]) {
            isRW.textContent = "Previous Answer Was Correct!";
            question4();
        } else {
            isRW.textContent = "Previous Answer Was Wrong!";
            scoreSec = scoreSec - 10;
            question4();
        }
    })
    btn3.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn3.textContent === aArray[2]) {
            isRW.textContent = "Previous Answer Was Correct!";
            question4();
        } else {
            isRW.textContent = "Previous Answer Was Wrong!";
            scoreSec = scoreSec - 10;
            question4();
        }
    })
    btn4.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn4.textContent === aArray[2]) {
            isRW.textContent = "Previous Answer Was Correct!";
            question4();
        } else {
            isRW.textContent = "Previous Answer Was Wrong!";
            scoreSec = scoreSec - 10;
            question4();
        }
    })
}
function question4() {
    H1.setAttribute("style", "text-align: start");
    H1.textContent = qArray[3];

    for (let i = 0; i < allBtn.length; i++) {
        answerChoices.appendChild(allBtn[i]);
    }
    btn1.textContent = aArray[3];
    btn2.textContent = "Hot Dogs";
    btn3.textContent = "Beef Ribs";
    btn4.textContent = "Lasagna";

    btn1.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn1.textContent === aArray[3]) {
            isRW.textContent = "Previous Answer Was Correct!";
            question5();
        } else {
            isRW.textContent = "Previous Answer Was Correct!";
            scoreSec = scoreSec - 10;
            question5();
        }
    })
    btn2.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn2.textContent === aArray[3]) {
            isRW.textContent = "Previous Answer Was Correct!";
            question5();
        } else {
            isRW.textContent = "Previous Answer Was Wrong!";
            scoreSec = scoreSec - 10;
            question5();
        }
    })
    btn3.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn3.textContent === aArray[3]) {
            isRW.textContent = "Previous Answer Was Correct!";
            question5();
        } else {
            isRW.textContent = "Previous Answer Was Wrong!";
            scoreSec = scoreSec - 10;
            question5();
        }
    })
    btn4.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn4.textContent === aArray[3]) {
            isRW.textContent = "Previous Answer Was Correct!";
            question5();
        } else {
            isRW.textContent = "Previous Answer Was Wrong!";
            scoreSec = scoreSec - 10;
            question5();
        }
    })
}
function question5() {
    H1.setAttribute("style", "text-align: start");
    H1.textContent = qArray[4];

    for (let i = 0; i < allBtn.length; i++) {
        answerChoices.appendChild(allBtn[i]);
    }
    btn1.textContent = aArray[4];
    btn2.textContent = "Jim Halpert";
    btn3.textContent = "Kelly Kapoor";
    btn4.textContent = "Creed Bratton";

    btn1.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn1.textContent === aArray[4]) {
            isRW.textContent = "Previous Answer Was Correct!";
            allDone()
        } else {
            isRW.textContent = "Previous Answer Was Correct!";
            scoreSec = scoreSec - 10;
            allDone()
        }
    })
    btn2.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn2.textContent === aArray[4]) {
            isRW.textContent = "Previous Answer Was Correct!";
            allDone()
        } else {
            isRW.textContent = "Previous Answer Was Wrong!";
            scoreSec = scoreSec - 10;
            allDone()
        }
    })
    btn3.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn3.textContent === aArray[4]) {
            isRW.textContent = "Previous Answer Was Correct!";
            allDone()
        } else {
            isRW.textContent = "Previous Answer Was Wrong!";
            scoreSec = scoreSec - 10;
            allDone()
        }
    })
    btn4.addEventListener("click", function (event) {
        event.stopPropagation();
        if (btn4.textContent === aArray[4]) {
            isRW.textContent = "Previous Answer Was Correct!";
            allDone()
        } else {
            isRW.textContent = "Previous Answer Was Wrong!";
            scoreSec = scoreSec - 10;
            allDone()
        }
    })
}
function allDone(){
    answerChoices.innerHTML= "";
    isRW.textContent = "";
    H1.setAttribute("style", "text-align: start");
    H1.textContent = "All done!";
    finalScore.setAttribute("style", "text-align: start; margin-top: 1em");
    finalScore.textContent = "Your final score is ";
    enter.appendChild(input);
    enter.appendChild(btn5)
    btn5.textContent = "Submit"
}





    
    




    
    