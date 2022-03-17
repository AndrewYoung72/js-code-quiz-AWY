var questionBox = document.querySelector(".question-box");
var startQuiz = document.querySelector(".start-button");
var correct = document.getElementById("#correct");
var timerElement = document.querySelector("#timer")
var wrong = document.getElementById("#wrong");
var timeLeft = 50;

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
      clearInterval(timer);
  }, 1000);
}
// var chosenQuestion = [];
// var correctCount = 0;
// var wrongCount = 0;
// var isCorrect = false;
// var timer;
// var timerCount;

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

function timerSetup() ;
}

// function init() {
//   getCorrect();
//   getWrong();
// }

// function startQuiz() {
//   isCorrect = false;
//   timerCount = 50;
//   startButtton.diabled = true;
//   presentQuestion()
//   startTimer()
// }

// function correct() {

// }

// function startTimer() {
//   timer = setInterval(function() {
//     timerCount--;
//     timerElement.textContent = timerCount;
//     if (timerCount >=0) {
//       if (isCorrect ) {
//         timerCount -10;
//       }
//     }

//     if (timerCount === 0) {
//       clearInterval(timer);
//       gameOver();
//     }
//   }, 1000);
// }

 startButtton.addEventListener("click", startQuiz);

// init();
