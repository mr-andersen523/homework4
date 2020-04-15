let counter = 25;
let intervalID;



//TIMER
$(document).ready(function () {

    $("#start").click(function () {
    
        intervalID = setInterval(decrement, 1000);
        writeSubmitButton();function decrement() {

    counter--;
    $("#timer").html("<header><span> Timer: " + counter + "</span></header>");
    if (counter === 0) {
        stop();
    }
    function stop() {
        clearInterval(intervalID);
        timer = 25;
        correct = 0;
        incorrect = 2;
      }
        };
    });
});






// pos is position of where the user in the test or which question they're up to
var pos = 0, quiz, quiz_result, question, choice, choices, chA, chB, chC, chD, correct = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions = [
  ["Commonly used data types DO NOT include:", 
  "strings", "booleans", "alerts", "numbers", 
  "C"],

  ["The condition in an if / else statement is enclosed within ____.", 
  "quotes", "curly brackets", "parentheses", "square brackets", 
  "C"],

  ["What does CSS stand for?",
  "Cascading Style Sheet", "Cascadia Surplus Style", "Constant Style Sheet", "Complex Simple Style",
  "A"],
  
  ["What are used for tags?",
  "''", "< >","...", "{ }", 
  "B"],

  ["A series of zero or more characters surrounded by single or double quotation marks is a( n ).", 
  "array", "bit map", "string", "structure", 
  "C"]
  ];
// this get function is short for the getElementById function  
function get(x){
  return document.getElementById(x);
}

function hideStart() {
    var x = document.getElementById("start");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    var x = document.getElementById("quiz");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    var x = document.getElementById("quiz_result");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
    var x = document.getElementById("back");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

  }






function renderQuestion(){
  quiz = get("quiz");

  
  if(pos >= questions.length){
    quiz.innerHTML = 
    "<h2 style='text-align: center'>You got "+correct+" of "+questions.length+" questions correct!</h2> <h3 style='text-align: center'><button onclick='hideStart(renderQuestion(window.location.reload()))' type='button' class='btn btn-secondary btn-lg' id='start' style='font-weight: bold; background-color: #563c7d'>Try Again</button><h3>";
    get("quiz_result").innerHTML = "Quiz completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("quiz_result").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  chD = questions[pos][4];

  quiz.innerHTML = "<h3>"+question+"</h3>";
  // the += appends to the data we started on the line above
  quiz.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  quiz.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  quiz.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
  quiz.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
  quiz.innerHTML += "<button class='btn btn-secondary' style='font-weight: bold;background-color: #563c7d' onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos][5]){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}

window.onload = function() {
  document.getElementById('quiz_result').style.display = 'none';
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('back').style.display = 'none';
};

window.addEventListener("load", document, false);
