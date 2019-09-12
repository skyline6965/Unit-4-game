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
var reset;

var audiSpeed;
var viperSpeed;
var chargerSpeed;
var policeSpeed;





function speedLimit(){
   speedLimit = Math.floor((Math.random() * 101) + 19);
   console.log(speedLimit);

}


function audiSpeed(){    
    audiSpeed = Math.floor((Math.random() * 12) + 1);
    console.log(audiSpeed);    
    
}


 

// start with an onclick that generates a random number once and adds it to yourSpeed







speedLimit();






// click on first car, random(x) points added to your speed
// click on second car, random(y) points added to your speed,
// thrid car, random (z) points
// 4th car, random (w) points

// make an onclick function that randomly generates a number between 1 and 12, four times (once for each car)
// make if statement saying that if x = x, don't run function





// var userText = document.getElementById("user-text");<------change number on doc, i.e- "Speed Limit" your speed