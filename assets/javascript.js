// global variables declared here


// Question and Answer objects got here


// Game initialization script including timer
let timer = document.querySelector("#timer");
console.log(timer.innerHTML);

let counter = 10;
function quizCountDown() {
let timerCountDown = setInterval(function() {
    console.log(counter);
    timer.innerHTML = counter
    counter--;
    if (counter === -1) {
        clearInterval(timerCountDown);
        counter = 10;
    };
}, 1000);
};

// window.addEventListener("click", )
document.querySelector("#quizStart").addEventListener("click", quizCountDown)


// Print questions and answers to screen


// Event listeners for clicks


// Validate user input and print to screen


// Clear Screen and print new question.


// Keep track of score