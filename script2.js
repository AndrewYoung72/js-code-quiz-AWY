var questionBox = document.querySelector("#questions");
var startButton = document.querySelector("#start-button");
var mainContainer = document.querySelector(".container");
var startContainer = document.querySelector(".header")
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");
var timerElement = document.querySelector("#timer-count")
var userScore = 0;
var timer;
var timerCount;
var currentIndex = 0;

// Question Array for question box
var questionBlock = [
  {
    question: "Which is not a pimitive data type?", 
    choices: ["Boollean", "String", "Array", "number"],
    answer: "Array"
  },
  {
    question: "What html element is used to link to a javascript file?",
    choices: ["<link>", "<a>", "<section>", "<script>"],
    answer: "<script>" 
  },
  {
    question: "Who created javascript?",
    choices: ["Al Gore", "Brendan Eich", "Mark Zuckerberg", "Carl Sagan"],
    answer: "Brendan Eich" 
  },
];

// questionBlock[0].choices[0].answer[0]

// Called by start quiz button, starts the quiz, timer, question
function startQuiz() {
  timerCount = 50;
  startButton.disabled = true;

  // make the main container appear
  mainContainer.style.display = "flex";
  startContainer.style.display = "none";
  startTimer()
  presentQuestion()
}

// Creates timer and links to html through timerCount
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    // clearInterval(timer);
  }, 1000);
}

function presentQuestion() {
  var choice1Btn = document.querySelector("#choice-1")
  var choice2Btn = document.querySelector("#choice-2")
  var choice3Btn = document.querySelector("#choice-3")
  var choice4Btn = document.querySelector("#choice-4")
  var questionText = document.querySelector("#question-text")

  questionText.textContent =  questionBlock[currentIndex].question;
  choice1Btn.textContent = questionBlock[currentIndex].choices[0];
  choice2Btn.textContent = questionBlock[currentIndex].choices[1];
  choice3Btn.textContent = questionBlock[currentIndex].choices[2];
  choice4Btn.textContent = questionBlock[currentIndex].choices[3];


  choice1Btn.addEventListener("click", function() { 
    if (choice1Btn.textContent === questionBlock[currentIndex].answer) {
    userScore++ 
  } else {
    timerCount -=10;
  } nextQuestion()
  })

  choice2Btn.addEventListener("click", function() { 
    if (choice2Btn.textContent === questionBlock[currentIndex].answer) {
    userScore++ 
  } else {
    timerCount -=10;
  } nextQuestion()
  })

  choice3Btn.addEventListener("click", function() { 
    if (choice3Btn.textContent === questionBlock[currentIndex].answer) {
    userScore++ 
  } else {
    timerCount -=10;
  }nextQuestion()
  })   
  
  choice4Btn.addEventListener("click", function(){ 
    if (choice4Btn.textContent === questionBlock[currentIndex].answer) {
    userScore++ 
  } else {
    timerCount -=10;
  }nextQuestion()
  }) 
}



function nextQuestion() {
  console.log(currentIndex)
  if(currentIndex < questionBlock.length) {
    currentIndex++;
    presentQuestion()
  } else {
    // the quiz has reached it end
    endQuiz()
  }
}

function endQuiz() {
  clearInterval(timer);
  prompt("You have finished the quiz. Would you like to save your initials and score?")
}


startButton.addEventListener("click", startQuiz)
