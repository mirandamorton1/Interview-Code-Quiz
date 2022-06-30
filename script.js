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
var questionTitle = document.getElementById("questionTitle")
// document.body.appendChild(questions[0])
questions.setAttribute("style", "display: none");

var questionList = [
  {
  title: "Commonly used data types DO NOT include:",
  choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
  answer: "alerts"
  },
{
  title: "The condition in an if/else statement is enclosed with_____.",
  choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
  answer: "alerts" 
}, 
{
  title: "Arrays in JavaScript can be used to store ______.",
  choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
  answer: "alerts"
},
{ 
  title: "String values must be enclosed within _____ when being assigned to varaibles.",
  choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
  answer: "alerts"

},
{
  title: "A very useful tool used during developement and debugging for printing content to the debugger is:",
  choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "console.log"],
  answer: "alerts"

},
]
// use event listener to make start page go away

// var title1 = document.createElement("h2")
// title1.innerHTML="Commonly used data types DO NOT include:"
// document.body.appendChild(title1)

startQuizBtn.addEventListener("click", startQuestions);

var questionNumber = 0
function startQuestions() {
  
  startQuiz.setAttribute("style", "display: none");

  //make questions appear
  questions.setAttribute("style", "display: flex");

  // start timer on the screen
 
  var timeEl = document.getElementById("time")
  var timeLeft = 100;
  console.log(timeLeft);

  var timerInterval = setInterval(function(){
    timeLeft--;
    timeEl.textContent = timeLeft;
  
    if (timeLeft === 0) {
      clearInterval(timerInterval)
    }}, 1000);

questionTitle.textContent=questionList[questionNumber].title



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