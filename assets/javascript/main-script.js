console.log(window);
console.log(window.document);
console.dir(document.body.children[0].children[2]) //Timer id="coundown-timer"
Object.getPrototypeOf(new Document())


var timerCountDown = document.getElementById('countdown-timer');
timerCountDown.style.color = "red"
var quizStartPage = document.getElementById('start-screen');
var quizStartButton = document.getElementById('start-button');
var quizQuestions = document.getElementById('questions');
var quizQuestionTitle = document.getElementById('questions-title');
var quizQuestionChoice = document.getElementById('questions-choice');
var quizEndPage = document.getElementById('end-screen');

