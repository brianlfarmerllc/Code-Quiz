// Setting the body to variable
var body = document.body;

// Variables for creating elements
var btn1 = document.createElement("button"); 
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var allBtn = [btn1, btn2, btn3, btn4];

// Attributes set 
btn1.setAttribute("class", "aButtons")
btn2.setAttribute("class", "aButtons")
btn3.setAttribute("class", "aButtons")
btn4.setAttribute("class", "aButtons")


// List of variable selectors listed from top to bottom
var timer = document.getElementById("timer")
var homeSection = document.getElementById("homeSection");
var H1 = document.getElementById("homeH1");
var clear = document.getElementById("clear")
var H3 = document.getElementById("homeH3"); 
var startQ = document.getElementById("homeBtn");
var answerChoices = document.getElementById("answerOptions")


// Questions displayed throughout the game
var qArray = [
    {q:"Finish the quote...Boy have you lost your mind cause I'll help you _________", a:"Find It" },
    {q:"What did Michael hit Meredith with?", a:"His Car"},
    {q:"What type of farm does Dwight own?", a:"Beet Farm"}, 
    {q:"What is Kevin's family Recipe", a:"Chili"},
    {q:"Who is not a Cast Character on the show?", a:"Michael Scarn"}
];
// Answers Array
var aArray = ["Find It", "His Car", "Beet Farm", "Chile", "Michael Scarn"];

// begining srore timer
var scoreSec = 100;


startQ.addEventListener("click", function (){

    var scoreTimer = setInterval(function() {
        scoreSec--;
        timer.textContent= "Time: " + scoreSec;

    }, 1000);

    question1();
})

function question1(){
    clear.innerHTML = "";
    H1.setAttribute("style", "text-align: start");
    H1.textContent = qArray[0].q;

    for (let i = 0; i < allBtn.length; i++) {
        answerChoices.appendChild(allBtn[i]);
    }
    btn1.textContent = "Out Brother";
    btn2.textContent = "Find It";
    btn3.textContent = "Build A Boat";
    btn4.textContent = "If You Need Help";

    btn2.addEventListener("click", function(){
        if (btn2 === "click") {
            question2()
        
        } else {
            scoreSec = scoreSec - 10;
            question2()
        }
    })
}

function question2(){
    clear.innerHTML = "";
    H1.setAttribute("style", "text-align: start");
    
    H1.textContent = qArray[1].q;

    for (let i = 0; i < allBtn.length; i++) {
        answerChoices.appendChild(allBtn[i]);
    }
    btn1.textContent = "A Roll of Toilet Paper";
    btn2.textContent = "Cupid's Arrow";
    btn3.textContent = "A Stapler";
    btn4.textContent = "His Car";

    answerChoices.addEventListener("click", function(){
        if (btn4 === "click") {
            question2()
            console.log(btn4)
        } else {
            scoreSec = scoreSec - 10;
            question2()
        }
    })
}

