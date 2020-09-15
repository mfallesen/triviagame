// global variables declared here
let timer = document.querySelector("#timer");
let quizBox = document.querySelector("#question-container");


// Question and Answer objects got here
const questionMatrix = questions;

// Game initialization script including timer

console.log(timer.innerHTML);

let counter = 3; // return to 100 and delete
function quizCountDown() {
    document.querySelector("header").style.visibility = "visible";
    document.querySelector("#quizStart").style.visibility = "hidden";
    questionPrinter();
    let timerCountDown = setInterval(function () {
        console.log(counter);
        timer.innerHTML = counter
        counter--;
        //clears the timer so it doesn't run past 0
        if (counter === -1) {
            clearInterval(timerCountDown);
            counter = 3; //return to 100 and delete
        };
    }, 1000);
};


// Print questions and answers to screen



console.log(questionMatrix[0].question);
function questionPrinter() {
    console.log("hi there");
    quizBox.removeChild(quizBox.firstElementChild);
    quizBox.firstElementChild.innerHTML = questionMatrix[0].question;
    for (var i = 0; i < questionMatrix[0].answerOps.length; i++) {
        let ansBtn = document.createElement("button");
        let ans = questionMatrix[0].answerOps[i];
        ansBtn.setAttribute("class", "button is-primary");
        quizBox.appendChild(ansBtn);
        ansBtn.innerHTML = ans;
    }
};

// Event listeners for clicks
document.querySelector("#quizStart").addEventListener("click", quizCountDown)

// Validate user input and print to screen

//if inner.HTML === correctAns


// Clear Screen and print new question.


// Keep track of score