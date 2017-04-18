
//set number to 1 min 30s
   var number = 90;

   var intervalId;

   var correctCount=0;
   var inCorrectCount=0;
   var unAnsweredCount=0;

 

//start game
$("#start").on("click",run);

$("#submit").click(function() {
 $("#correct").html("<h3> Correct Answers: </h3>" + correctCount);
 	$("#incorrect").html("<h3> Inorrect Answers: </h3>" + inCorrectCount);
 	$("#unanswered").html("<h3> Unanswered: </h3>" + unAnsweredCount);
 	document.getElementById("questionsTwo").innerHTML = document.getElementById("endGame").innerHTML;

  });

function handleClick(){         
         
for(var i = 1; i <= 6; i++) {
  var radios = document.getElementsByName('question'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.id== "correct" && radio.checked) {
      correctCount++;
    }else if (radio.id== "incorrect" && radio.checked){
    	inCorrectCount++;
    }else{
    	unAnsweredCount++;
    }
  }
 }                   
    alert("Correct Responses: " + correctCount);
  }

function decrement(){

	number--;
	$("#timer").html("<h2>" + number + "</h2>");


	if (number === 0){

		stop();
		alert("You've run out of time");
		handleClick();
		end();
	}
}

function change() {
    document.getElementById("questions").innerHTML = document.getElementById("questionsTwo").innerHTML;
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
 	number ==90;
 	
 }

