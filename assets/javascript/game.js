// starting random number
// wins, win counter, 
// losses, losses counter,
// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.


// 
var speedLimit;
var yourSpeed;
var wins;
var losses;



function speedLimit(){
   speedLimit = Math.floor((Math.random() * 121) + 19);
   console.log(speedLimit);

}

speedLimit();




// var userText = document.getElementById("user-text");<------change number on doc, i.e- "Speed Limit" your speed