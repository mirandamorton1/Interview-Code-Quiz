//State variables
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var score = 0;
var finalScore = document.getElementById("finalScore")
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var end = document.getElementById("end")
end.setAttribute("style", "display: none")
var timeLeft = 100;
var timeEl = document.getElementById("time")
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
  choices: ["strings", "booleans", "alerts", "numbers"],
  answer: "alerts"
  },
{
  title: "The condition in an if/else statement is enclosed with_____.",
  choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
  answer: "curly brackets" 
}, 
{
  title: "Arrays in JavaScript can be used to store ______.",
  choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
  answer: "all of the above"
},
{ 
  title: "String values must be enclosed within _____ when being assigned to varaibles.",
  choices: ["commas", "curly brackets", "quotes", "parenthesis"],
  answer: "quotes"

},
{
  title: "A very useful tool used during developement and debugging for printing content to the debugger is:",
  choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
  answer: "console.log"

},
]
// use event listener to make start page go away

// var title1 = document.createElement("h2")
// title1.innerHTML="Commonly used data types DO NOT include:"
// document.body.appendChild(title1)
var currentQuestionIndex = 0;
startQuizBtn.addEventListener("click", startQuestions);

// var questionNumber = 0
function startQuestions() {
  
  startQuiz.setAttribute("style", "display: none");

  //make questions appear
  questions.setAttribute("style", "display: flex");

  // start timer on the screen
 
getQuestion();
  console.log(timeLeft);

  var timerInterval = setInterval(function(){
    timeLeft--;
    timeEl.textContent = timeLeft;
  
    if (timeLeft === 0) {
      clearInterval(timerInterval)
    }}, 1000);
  };
// questionTitle.textContent=questionList[questionNumber].title
// choices.textContent=questionList[questionNumber].title


// // Selects element by id

// function startQuiz () {
//     var startScreenEl = document.getElementById("start-screen");
//     startScreenEl.setAttribute("class", "hide");
// }

function getQuestion () {
    var currentQuestion = questionList[currentQuestionIndex];

    var titleEl = document.getElementById("questionTitle");
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i) {

        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 + "." + choice;
        choiceNode.onclick = questionClick;
        choicesEl.appendChild(choiceNode);
      

    // startBtn.addEventListener("click", startQuiz);

  //   var startBtn = document.getElementById("start-btn");
  // startBtn.addEventListener('click', (startQuiz) => {
  });
}
function questionClick(){
  console.log(this.value)
  if (this.value !== questionList[currentQuestionIndex].answer) {
    alert("Wrong!");
    timeLeft-=10;   
    timeEl.textContent = timeLeft;
  } else { alert("Correct!");
    score += 1; 

  };
  currentQuestionIndex++;
  console.log(currentQuestionIndex)
  console.log(questionList.length)
  if (currentQuestionIndex===questionList.length) {
    endQuiz();
  } else {
    getQuestion ();
  }
};
function endQuiz () {
  alert("Finished");
  end.setAttribute("style", "display: flex");
  questions.setAttribute("style", "display: none");
  finalScore.textContent ="Your final score is " + score + ".";
  //grab time left variable when this runs
  //append child
}
