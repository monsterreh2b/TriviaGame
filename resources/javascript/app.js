
//set number to 1 min 30s
   var number = 20;

   var intervalId;

   var correctCount=0;
   var inCorrectCount=0;
   var unAnsweredCount=0;

 var audio = new Audio("https://www.amazon.com/Chicago-Bulls-Sirius-stadium-Version/dp/B00CFMXT4K");

//start game

  
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

    if (radios.checked===false){
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
	audio.play();
}

function runTwo(){
  number = 20;
  intervalId = setInterval(decrement, 1000);
  change();
}


function stop(){

	clearInterval(intervalId);
}

function check(){
	var selectedOption = $("input:radio[name=option]:checked").val();
	

}



function done(){
  stop();
    alert("You've run out of time");
    handleClick();
    number =20;
    changeTwo();
    correctCount=0;
   inCorrectCount=0;
   unAnsweredCount=0;
}

function doneTwo(){
	handleClick();
    number =20;
    changeTwo();
    correctCount=0;
   inCorrectCount=0;
   unAnsweredCount=0;
}

$("#start").on("click",run);

$("#submit").on("click",doneTwo);


