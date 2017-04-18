
//set number to 1 min 30s
   var number = 20;

   var intervalId;

   var correctCount=0;
   var inCorrectCount=0;
   var unAnsweredCount=0;

 

//start game
$("#start").on("click",run);

$("#submit").on("click",run);
 
  
function handleClick(){         
         
for(var i = 1; i <= 6; i++) {
    var radios = document.getElementsByName('question'+i);
    for(var j = 0; j < radios.length; j++) {
      var radio = radios[j];
      if(radio.id== "correct" && radio.checked) {
        correctCount++;
      }else if (radio.id== "inCorrect" && radio.checked){
      	inCorrectCount++;
      }
    }
if (radios.checked==false){
        unAnsweredCount++;
      }  
   }

      alert("Correct Responses: " + correctCount);
       alert("InCorrect Responses: " + inCorrectCount);
    
  }

function decrement(){

	number--;
	$("#timer").html("<h2>" + number + "</h2>");


	if (number === 0){

		stop();
		alert("You've run out of time");
		handleClick();
		end();
    changeTwo();
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
}




function stop(){

	clearInterval(intervalId);
}

function check(){
	var selectedOption = $("input:radio[name=option]:checked").val();
	

}

function end(){
 	number ==20;
 	
 }

