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

// Creates timer and links to html through timerCount
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
      clearInterval(timer);
  }, 1000);
}

// Function to link chosen question to html
function presentQuestion() {

}

// I need to determine if the answer is correct or wrong
function answerCorrect() {

}

function answerWrong() {

}
// Set correct answer counter
function correct() {
  correct.textContent = correctCounter;
  localStorage.setItem("correctCount", correctCounter);
}

// Set wrong answer counter
function wrong() {
  wrong.textContent = wrongCounter;
  localStorage.setItem("wrongCount", wrongCounter);
}
// Get stored values for correct and incorrect
function getCorrect() {
  var storedCorrect = localStorage.getItem("correctCount");
  
  if (storedCorrect === null) {
    correctCounter = 0;
  } else {
    correctCounter = storedCorrect;
  }
  correct.textContent = correctCounter
}

function getWrong() {
  var storedWrong = localStorage.getItem("wrongCount");
  if (storedWrong === null) {
    wrongCounter = 0;
  } else {
    wrongCounter = storedWrong;
  }
  wrong.textContent = wrongCounter;
}


// Need a prompt?? to enter initials, score, and save to local storage

 startButtton.addEventListener("click", startQuiz);

init();
