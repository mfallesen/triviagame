// global variables declared here
let timer = document.querySelector("#timer");
let quizBox = document.querySelector("#question-container");
let score = timer.textContent;

// Question and Answer objects got here
const questionMatrix = questions;

// Game initialization script including timer

// console.log(timer.textContent);

let counter = 3; // return to 100 and delete
function quizCountDown() {
    document.querySelector("header").style.visibility = "visible";
    document.querySelector("#quizStart").style.visibility = "hidden";
    questionPrinter();
    counterStart();
};

function counterStart() {
    let timerCountDown = setInterval(function () {
        console.log(counter);
        timer.textContent = counter
        counter--;
        //clears the timer so it doesn't run past 0
        if (counter === -1) {
            clearInterval(timerCountDown);
            counter = 3; //return to 100 and delete
        };
    }, 1000);
}


// Print questions and answers to screen



// console.log(questionMatrix[2].question);

//prints a question and answer buttons to the screen. 
function questionPrinter() {
    // removes the h1 header
    quizBox.removeChild(quizBox.firstElementChild);
    //populates the question
    quizBox.firstElementChild.textContent = questionMatrix[2].question;
    // loops through the question object and creates a button for each answer
    for (var i = 0; i < questionMatrix[2].answerOps.length; i++) {
        let ansBtn = document.createElement("button");
        let ans = questionMatrix[2].answerOps[i];
        ansBtn.setAttribute("class", "button is-primary answer-button");
        ansBtn.setAttribute("id", i)
        quizBox.appendChild(ansBtn);
        ansBtn.textContent = ans;
        
    }
    
};

// Event listeners for clicks
document.querySelector("#quizStart").addEventListener("click", quizCountDown)

// Validate user input and print to screen
// 
document.querySelector("#question-container").addEventListener("click", function (event) {
    // console.log("I clicked inside the div");
    // console.log(event.target.textContent);
    if (event.target.textContent === questionMatrix[2].correctAns) {
        console.log("this is a button click");
    }
});


//function ansClick() {

//     document.getElementsByClassName(".answer-button").addEventListener("click", function () {
//         console.log("clicked");
//     })
// };



// Clear Screen and print new question.


// Keep track of score