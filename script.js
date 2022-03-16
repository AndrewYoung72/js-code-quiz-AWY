var startQuiz = document.querySelector('.startButton');
var correct = document.getElementById("#correct");
var wrong = document.getElementById("#wrong")
var timerElement = document.querySelector('#timer');
var chosenQuestion = [];
var correctCount = 0;
var wrongCount = 0;
var isCorrect = false;
var timer;
var timerCount;

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
  startButtton.diabled = true;
  presentQuestion()
  startTimer()
}

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >=0) {
      if (isCorrect = false) {
        timerCount-10;
      }
    }

    if (timerCount === 0) {
      clearInterval(timer);
      gameOver();
    }
  }, 50);
}
