var questionBox = document.querySelector("#questions");
var startQuiz = document.querySelector("#start-button");
var correct = document.getElementById("#correct");
var wrong = document.getElementById("#wrong");
var timerElement = document.querySelector("#timer-count")
var correct = 0;
var wrong = 0;
var isCorrect = false;
var timer;
var timerCount;
var chosenQuestion = [];
// Question Array
var questionBlock = [
  {
    question: "Which is not a pimitive data type?", 
    choices: ["Boollean", "String", "Array", "number"],
    answer: "Array"},

  {
    question: "What html element is used to link to a javascript?",
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

function startQuiz() {
  isCorrect = false;
  timerCount = 50;
  startButtton.disabled = true;
  presentQuestion()
  startTimer()
}


function timerSetup() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
      clearInterval(timer);
  }, 1000);
}


 startButtton.addEventListener("click", startQuiz);

// init();
