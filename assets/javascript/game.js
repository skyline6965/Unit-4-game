// starting random number
// wins, win counter, 
// losses, losses counter,
// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.


// 
var speedLimit;
var yourSpeed = 0;
var wins;
var losses;
var reset;

var speed = [audiSpeed,viperSpeed,chargerSpeed,policeSpeed];

// var audiSpeed;
// var viperSpeed;
// var chargerSpeed;
// var policeSpeed;

// Problem #1, i can click on the car to get its value (number), but if i click on it again, its gives me an error.

// Problem #2, i need to figure out a formula to add the numbers from the cars together to get "Your Speed".

// 







function speedLimit(){
   speedLimit = Math.floor((Math.random() * 101) + 19);
   console.log(speedLimit);

}


function audiSpeed(){    
    audiSpeed = Math.floor((Math.random() * 12) + 1);
    console.log(audiSpeed);
    return;

}

function viperSpeed(){    
    viperSpeed = Math.floor((Math.random() * 12) + 1);
    console.log(viperSpeed);
    return(yourSpeed);  
    
}

function chargerSpeed(){    
    chargerSpeed = Math.floor((Math.random() * 12) + 1);
    console.log(chargerSpeed);    
    return(yourSpeed);

}

function policeSpeed(){    
    policeSpeed = Math.floor((Math.random() * 12) + 1);
    console.log(policeSpeed);    
    return(chargerSpeed);
}


 


// document.getElementById("audi").onclick = function audiSpeed(){
//     var audiSpeed = Math.floor((Math.random() * 12) + 1);
//     console.log(audiSpeed);
//     return(yourSpeed); 
//     console.log(yourSpeed); 
// }




// ==================== Call Functions==============================//
speedLimit();
console.log(yourSpeed);






// click on first car, random(x) points added to your speed
// click on second car, random(y) points added to your speed,
// thrid car, random (z) points
// 4th car, random (w) points

// make an onclick function that randomly generates a number between 1 and 12, four times (once for each car)
// make if statement saying that if x = x, don't run function?????

// 


//for loop that grabs the first car and randomly generates a number * bonus, no four numbers are the same. ??????


// var userText = document.getElementById("user-text");<------change number on doc, i.e- "Speed Limit" your speed