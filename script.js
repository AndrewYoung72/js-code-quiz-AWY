var questionBox = document.querySelector("#questions");
var startButtton = document.querySelector("#start-button");
var correct = document.getElementById("#correct");
var wrong = document.getElementById("#wrong");
var timerElement = document.querySelector("#timer-count")
var correctCounter = 0;
var wrongCounter = 0;
var isCorrect = false;
var timer;
var timerCount;
var chosenQuestion = [];

// Question Array for question box
var questionBlock = [
  {
    question: "Which is not a pimitive data type?", 
    choices: ["Boollean", "String", "Array", "number"],
    answer: "Array"},

  {
    question: "What html element is used to link to a javascript file?",
    choices: ["<link>", "<a>", "<section>", "<script>"],
    answer: "<script>" },
  {
    question: "Who created javascript?",
    choices: ["Al Gore", "Brendan Eich", "Mark Zuckerberg", "Carl Sagan"],
    answer: "Brendan Eich" },
];


function init() {
  getCorrect();
  getWrong();
}
// Called by start quiz button, starts the quiz, timer, question
function startQuiz() {
  isCorrect = false;
  timerCount = 50;
  startButtton.disabled = true;
  startTimer()
  presentQuestion()
}

// Creates timer and links to html through timerElement variable
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
      clearInterval(timer);
  }, 1000);
}

// Set correct answer coounter
function correct() {
  correctCounter++;
  startButtton.disabled = false;
  setcorrectCounter()
}

// Set wrong answer counter
function wrong() {
  wrongCounter++;
  startButtton.disabled = false;
  setwrongCounter()
}


// Function to link chosen question to html
function presentQuestion() {

}

// Need a function to enter initials, score, and save to local storage

 startButtton.addEventListener("click", startQuiz);

init();
