
//set number to 1 min 30s
   var number = 30;

   var intervalId;

   var correctCount=0;
   var inCorrectCount=0;
   var unAnsweredCount=6;
    
 // var audio = new Audio("https://www.amazon.com/Chicago-Bulls-Sirius-stadium-Version/dp/B00CFMXT4K");

//start game

  
function handleClick(){         
         
for(var i = 1; i <= 6; i++) {
    var eachQuestion = document.getElementsByName('question'+i);
    for(var j = 0; j < eachQuestion.length; j++) {
      var answerChoices = eachQuestion[j];
      if(answerChoices.id== "correct" && answerChoices.checked) {
        correctCount++;
      }else if (answerChoices.id== "inCorrect" && answerChoices.checked){
      	inCorrectCount++;
      }
    
 
    if (answerChoices.checked){
        unAnsweredCount--;
        // console.log(temp);
      }//end of j loop

     }
   }

      alert("Correct Responses: " + correctCount);
       alert("InCorrect Responses: " + inCorrectCount);
    	alert("Unanswered Responses: " + unAnsweredCount);
  }

function decrement(){

	number--;
	$("#timer").html("<h2>" + number + "</h2>");


	if (number === 0){
    done();
		
	}
}

function change() {
    document.getElementById("questions").innerHTML = document.getElementById("questionsTwo").innerHTML;
   }

function changeTwo(){
  document.getElementById("endGameCorrect").innerHTML= "<h3> Correct Answers: </h3>" + correctCount;
  document.getElementById("endGameIncorrect").innerHTML="<h3> Incorrect Answers: </h3>" + inCorrectCount;
  document.getElementById("endGameUnanswered").innerHTML = "<h3> Unanswered: </h3>" + unAnsweredCount;
  document.getElementById("questions").innerHTML = document.getElementById("endGame").innerHTML;
 

  
}

 function run(){
	intervalId = setInterval(decrement, 1000);
	change();
	// audio.play();
}

function runTwo(){
  number = 30;
  intervalId = setInterval(decrement, 1000);
  change();
}


function stop(){

	clearInterval(intervalId);
}

function stopAfterSubmit(){
	clearInterval(intervalId);
	number = 30;
}
function check(){
	var selectedOption = $("input:answerChoices[name=option]:checked").val();
	

}



function done(){
  stop();
    alert("You've run out of time");
    handleClick();
    number =30;
    changeTwo();
    correctCount=0;
   inCorrectCount=0;
   unAnsweredCount=6;
}

function doneTwo(){
	
	handleClick();
    number =30;
    changeTwo();
    correctCount=0;
   inCorrectCount=0;
   unAnsweredCount=6;
}

$("#start").on("click",run);

$(document).on("click","#questionsTwo", function() {
	event.preventDefault();
    handleClick();
    changeTwo();
});
