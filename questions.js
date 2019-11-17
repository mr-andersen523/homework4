//QUESTIONS
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<javascript>", "<js>", "<script>", "<scripting>"],
        answer: "<script>"
      },
      {
        title: "An external JavaScript must contain the <script> tag.",
        choices: ["True", "False"],
        answer: "False"
      },
      {
        title: "A series of zero or more characters surrounded by single or double quotation marks is a( n ).",
        choices: ["array", "bit map", "string", "structure"],
        answer: "string"
      },
    
  ];
















let counter = 75;
let intervalID;



//TIMER
$(document).ready(function () {

    $("#startGame").click(function () {
    
        intervalID = setInterval(decrement, 1000);
       
        $("#startGame").hide();
        writeSubmitButton();function decrement() {

    counter--;
    $("#timer").html("<header><span>" + counter + " seconds remaining.</span></header>");
    if (counter === 0) {
        stop();
    }
    function stop() {
        clearInterval(intervalID);
        timer = 60;
        correct = 0;
        incorrect = 10;
       
      }
        };
    });
});

