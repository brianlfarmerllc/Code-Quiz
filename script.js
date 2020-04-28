// Setting the body to variable
var body = document.body;

// Variables for creating elements
var questionNumber = 0
var currentCorrect = 0
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var allBtn = [btn1, btn2, btn3, btn4];
var input = document.createElement("input");
var btn5 = document.createElement("button");
var hsLi = document.createElement("li");

// Attributes of class and id's set to created button elements 
btn1.setAttribute("class", "aButtons");
btn2.setAttribute("class", "aButtons");
btn3.setAttribute("class", "aButtons");
btn4.setAttribute("class", "aButtons");
input.setAttribute("class", "hsInput");
input.setAttribute("id", "enterInitials");
input.setAttribute("placeholder", "Enter Initials");
btn5.setAttribute("class", "hsSubmit");
btn5.setAttribute("id", "submitHighscore");
btn5.setAttribute("type", "submit");
hsLi.setAttribute("class", "form-inline");

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
var scoresList = document.getElementById("scoresList");
var isRW = document.getElementById("isRW");
var hsSubmit = document.getElementById("submitHighscore");
var hsButtons = document.getElementById("hsButtons");

// empty array to puch the hs too

var hsAll;
if(localStorage.hsAll === undefined) {
     hsAll = [];
} else {
     hsAll = JSON.parse(window.localStorage.hsAll);
}

// Questions, answer choices, and correct answer displayed throughout the game
var qArray = [
    { q: "Finish the quote...Boy have you lost your mind cause I'll help you _________", a: "Find It", aList: ["Out Brother", "Find It", "Build A Boat", "If You Need Help"] },
    { q: "What did Michael hit Meredith with?", a: "His Car", aList: ["A Roll of Toilet Paper", "Cupid's Arrow", "A Stapler", "His Car"] },
    { q: "What type of farm does Dwight own?", a: "Beet Farm", aList: ["A Cattle Ranch", "Soy Bean Farm", "Beet Farm", "A Bunny Ranch"] },
    { q: "What is Kevin's family Recipe", a: "Chili", aList: ["Chili", "Hot Dogs", "beef Ribs", "Lasagna"] },
    { q: "Who is not a Cast Character on the show?", a: "Michael Scarn", aList: ["Michael Scarn", "Jim Halpert", "Kelly Kapoor", "Creed Bratton"] },
];

// begining score timer
var scoreSec = 75;
var scoreTimer;

// begins the game and starts the timer
function startGame() {

    scoreTimer = setInterval(function () {
        timer.textContent = "Time: " + scoreSec;
        scoreSec--;


    }, 1000);

    for (let i = 0; i < allBtn.length; i++) {
        answerChoices.appendChild(allBtn[i]);
    }

    currentQuestion();
}


// generates the questions in the quiz game
function currentQuestion() {


    clear.innerHTML = "";
    H1.setAttribute("style", "text-align: start");
    H1.textContent = qArray[questionNumber].q
    var currentAnswers = qArray[questionNumber]["aList"];
    currentCorrect = qArray[questionNumber].a

    for (let i = 0; i < currentAnswers.length; i++) {
        allBtn[i].textContent = currentAnswers[i];
    }
    
}
// checks to see if you should go to next current question or stop timer and go to all done
function checkLength() {
    if (questionNumber === qArray.length || scoreTimer < 0) {
        allDone();
        clearInterval(scoreTimer);
    } else {
        currentQuestion();
    }

}
// 4 event listeners to check the answers to the questions
btn1.addEventListener("click", function (event) {
    event.stopPropagation();
    if (btn1.textContent === currentCorrect) {
        isRW.textContent = "Previous Answer Was Correct!";
        questionNumber++;
        currentCorrect++;
        checkLength();


    } else {
        isRW.textContent = "Previous Answer Was Wrong!";
        scoreSec = scoreSec - 10;
        questionNumber++;
        currentCorrect++;
        checkLength();

    }
})
btn2.addEventListener("click", function (event) {
    event.stopPropagation();
    if (btn2.textContent === currentCorrect) {
        isRW.textContent = "Previous Answer Was Correct!";
        questionNumber++;
        currentCorrect++;
        checkLength();
    } else {
        isRW.textContent = "Previous Answer Was Wrong!";
        scoreSec = scoreSec - 10;
        questionNumber++;
        currentCorrect++;
        checkLength();
    }
})
btn3.addEventListener("click", function (event) {
    event.stopPropagation();
    if (btn3.textContent === currentCorrect) {
        isRW.textContent = "Previous Answer Was Correct!";
        questionNumber++;
        currentCorrect++;
        checkLength();
    } else {
        isRW.textContent = "Previous Answer Was Wrong!";
        scoreSec = scoreSec - 10;
        questionNumber++;
        currentCorrect++;
        checkLength();
    }
})
btn4.addEventListener("click", function (event) {
    event.stopPropagation();
    if (btn4.textContent === currentCorrect) {
        isRW.textContent = "Previous Answer Was Correct!";
        questionNumber++;
        currentCorrect++;
        checkLength();
    } else {
        isRW.textContent = "Previous Answer Was Wrong!";
        scoreSec = scoreSec - 10;
        questionNumber++;
        currentCorrect++;
        checkLength();
    }
})
// generates the page to submit your High Score
function allDone() {
    timer.textContent = "";
    answerChoices.innerHTML = "";
    isRW.textContent = "";
    H1.setAttribute("style", "text-align: start");
    H1.textContent = "All done!";
    finalScore.setAttribute("style", "text-align: start; margin-top: 1em");
    finalScore.textContent = "Your final score is " + scoreSec;
    enter.appendChild(input);
    enter.appendChild(btn5)
    btn5.textContent = "Submit"
}
// event function when you submit your score
btn5.addEventListener("click", function (event) {
    event.preventDefault();

    var newInput = document.getElementById("enterInitials");
    var userInput = newInput.value.trim();
    
    var newScore = userInput + " - " + scoreSec + " seconds";
    hsAll.push(newScore);
    storeHS()
    highScoresList();
})
// generates the High Scores list
function highScoresList() {
    H1.setAttribute("style", "text-align: start");
    H1.textContent = "Highscores";
    done.innerHTML = "";
    var homeHs = ["Start Quiz", "Clear High Scores"];
  
    for (let i = 0; i < hsAll.length; i++) {
        var hsLi = document.createElement("li");
        hsLi.setAttribute("class", "high-scores");
        scoresList.appendChild(hsLi);
        hsLi.textContent = hsAll[i];
    }
    for (let i = 0; i < homeHs.length; i++) {
        var newButtons = document.createElement("button");
        newButtons.setAttribute("class", "aButtons");
        newButtons.setAttribute("style", "display: inline; margin: 25px 50px 50px 50px" )
        hsButtons.appendChild(newButtons);
        newButtons.textContent = homeHs[i];
    }
}


// function to store High Scores to local storage
function storeHS() {
    localStorage.setItem("hsAll", JSON.stringify(hsAll));
  }


  
function restartHS(event){
    if (event.target.textContent === "Start Quiz") {
        location.reload();
    } 
    else if (event.target.textContent === "Clear High Scores") {
        localStorage.clear();
    }
}

  startQ.addEventListener("click", startGame)
  hsButtons.addEventListener("click", restartHS)
