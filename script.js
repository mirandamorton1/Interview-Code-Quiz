//State variables
var currentQuestionIndex =0;
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var end = document.getElementById("end")
end.setAttribute("style", "display: none")

// want the start button to go to next questions
var startQuiz = document.getElementById("startQuiz")
var startQuizBtn = document.getElementById("startQuizBtn")

var questions = document.getElementById("questions")
questions.setAttribute("style", "display: none");

// use event listener to make start page go away

startQuizBtn.addEventListener("click", startQuestions);

function startQuestions() {
  
  startQuiz.setAttribute("style", "display: none");
  
  //make questions appear
  // questions.setAttribute("style", "display: flex");

  // start timer on the screen
 
  var timeEl = document.getElementById("time")
  var timeLeft = 100;
  console.log(timeLeft);

  var timeInterval = setInterval(function(){
    timeLeft--;
    timeEl.textContent = timeLeft;
  
    if (timeLeft === 0) {
      clearInterval(timerInterval)
    }}, 1000);


// // var timerEl = document.querySelector(".timerEl");
// var timerEl = document.querySelector(".timerEl")
// var secondsLeft = 10;


// function setTime() {

//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timerEl.textContent = secondsLeft + " seconds left!";

//     if(secondsLeft === 0) {
//      clearInterval(timerInterval)
// }}, 1000);

// // Selects element by id

// function startQuiz () {
//     var startScreenEl = document.getElementById("start-screen");
//     startScreenEl.setAttribute("class", "hide");
// }

// function getQuestion () {
//     var currentQuestion = questions[currentQuestionIndex];

//     var titleEl = document.getElementById("question-title");
//     titleEl.textContent = currentQuestion.title;

//     choicesEl.innerHTML = "";

//     currentQuestion.choices.forEach(function(choice, i) {

//         var choiceNode = document.createElement("button");
//         choiceNode.setAttribute("class", "choice");
//         choiceNode.setAttribute("value", choice);

//         choiceNode.textContent = i + 1 + "." + choice;

//         choiceNode.onclick = questionClick;})}

//     startBtn.addEventListener("click", startQuiz);

//     var startBtn = document.getElementById("start-btn");
//   startBtn.addEventListener('click', (startQuiz) => {
//   })

//   startBtn.addEventListener('click',  setTime)
  }