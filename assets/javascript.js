// global variables declared here
let timer = document.querySelector("#timer");
let quizBox = document.querySelector("#question-container");
let timerCountDown;
let qIndex = 0;
let counter = 30; // return to 100 and delete
let testActive = false;
let hsList = window.localStorage;
let nuDiv = document.createElement("div");
let nuPar = document.createElement("p");
// Question and Answer objects got here
const questionMatrix = questions;
hsList.setItem("mycat", "Tom");
console.log(hsList);



// Game initialization script including timer
function quizCountDown() {
    //display timer
    document.querySelector("header").style.visibility = "visible";
    //remove start button
    document.querySelector("#quizStart").style.visibility = "hidden";
    quizBox.removeChild(quizBox.firstElementChild); //removes H1 header
    questionPrinter();
    counterStart();
};

function counterStart() {
    timerCountDown = setInterval(function () {
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

//prints a question and answer buttons to the screen. 
function questionPrinter() {
    //clear HTML from #question-container
    quizBox.firstElementChild.innerHTML = "";
    //create wrapper div
    nuDiv = document.createElement("div");
    //create empty paragraph
    nuPar = document.createElement("p");


    if (qIndex > 9) {
        clearInterval(timerCountDown);
        saveScore();
    } else {
        //set text of new paragraph
        nuPar.textContent = questionMatrix[qIndex].question;
        //adds the paragraph and its text to the wrapper div
        nuDiv.appendChild(nuPar);
        // loops through the question object and creates a button for each answer
        for (var i = 0; i < questionMatrix[qIndex].answerOps.length; i++) {
            //declare buttons and the answers that go in the buttons
            let ansBtn = document.createElement("button");
            let ans = questionMatrix[qIndex].answerOps[i];
            //set style classes for Bulma
            ansBtn.setAttribute("class", "button is-primary");
            // set button text
            ansBtn.textContent = ans;
            // adds the buttons to the document
            nuDiv.appendChild(ansBtn);
        }
    }

    //adds the wrapper div and the paragraph it contains to the article
    quizBox.firstElementChild.appendChild(nuDiv);
};

// Event listeners for clicks
document.querySelector("#quizStart").addEventListener("click", quizCountDown)

// Validate user input and print to screen
// 
document.querySelector("#question-container").addEventListener("click", function (event) {

    if (event.target.textContent === questionMatrix[qIndex].correctAns) {
        qIndex++
        questionPrinter();
        //insert next question and update score
    } else {
        // disable wrong button
        event.target.setAttribute("disabled", true)
        counter -= 10;
    }
});

function scoreSaver() {
    //clear the div
    quizBox.firstElementChild.innerHTML = "";
    
    let score = timer.textContent;
    let nameInput = document.createElement("input");
    let nameBtn = document.createElement("button");
    
    nameInput.setAttribute("class", "input is-primary")
    
    nameBtn.setAttribute("class", "button is-primary");
    nameBtn.setAttribute("id", "nameSub")
    nameBtn.textContent = "Submit your Score!";

    
    
   
    nuPar.textContent = "You got " + score + " points!";
    nuDiv.appendChild(nuPar);
    nuDiv.appendChild(nameInput);
    nuDiv.appendChild(nameBtn);
}


