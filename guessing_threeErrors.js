
var theResult = document.querySelector("#result");;
var newNum;
var theInput = document.querySelector('guess');
theInput.addEventListener("change",checkGuess,false);

function startAgain() {
    newNum=Math.floor(Math.random()*99);
    theInput.value = "";

}

function checkGuess(evt){
  if (newNum<evt.target.value)
  {
    theResult.innerHTML = "too low";
    theInput.value = "";
    
  
} else if (theResult<evt.target.value) {
  theResult.innerHTML = "too high";
  theInput.value = "";
  
} else {
  theResult.innerHTML = "You won";
  startAgain();
}
}

startAgain();