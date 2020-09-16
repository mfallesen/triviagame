// global variables declared here
let timer = document.querySelector("#timer");
let quizBox = document.querySelector("#question-container");
let score = timer.textContent;
let qIndex = 0;
let counter = 30; // return to 100 and delete
let testActive = false;
// Question and Answer objects got here
const questionMatrix = questions;

// Game initialization script including timer



function quizCountDown() {
    document.querySelector("header").style.visibility = "visible";
    document.querySelector("#quizStart").style.visibility = "hidden";
    quizBox.removeChild(quizBox.firstElementChild);
    questionPrinter();
    counterStart();
};

function counterStart() {
    let timerCountDown = setInterval(function () {
        testActive = true;
        console.log(counter);
        timer.textContent = counter
        counter--;
        //clears the timer so it doesn't run past 0
        if (counter <= -1) {
            clearInterval(timerCountDown);
            testActive = false;
            counter = 3; //return to 100 and delete
        };
    }, 1000);
}

// console.log(questionMatrix[2].question);

//prints a question and answer buttons to the screen. 
function questionPrinter() {
    // removes the h1 header
    quizBox.firstElementChild.innerHTML = "<p> </p>";
    //populates the question
    quizBox.firstElementChild.textContent = questionMatrix[qIndex].question;
    // loops through the question object and creates a button for each answer
    for (var i = 0; i < questionMatrix[qIndex].answerOps.length; i++) {
        let ansBtn = document.createElement("button");
        let ans = questionMatrix[qIndex].answerOps[i];
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
    if (event.target.textContent === questionMatrix[qIndex].correctAns) {
        console.log("this is a button click");
        qIndex++
        questionPrinter();
        //insert next question and update score
    } else {
        console.log("this is the wrong button click")
        counter -= 10;
    }
});




// loop Through Questions

//  function questionLoop() {
//     for (var j = 0; j <= questionMatrix.length; j++) 





//     // while (testActive === true) {
//     //     console.log("testActive");
//     // }
//  }

// function ()


// Keep track of score