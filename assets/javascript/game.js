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

// var yourSpeed = [audiSpeed + viperSpeed + chargerSpeed + policeSpeed];

var audiSpeed;
var viperSpeed;
var chargerSpeed;
var policeSpeed;


// cars auto generate number, clicking on picture grabs its value and adds it to the total speed (yourSpeed)




function speedLimit() {
    speedLimit = Math.floor((Math.random() * 101) + 19);
    console.log(speedLimit);
    document.getElementById("speedLimit").innerHTML = (speedLimit + " MPH");

}


var audiSpeed = Math.floor((Math.random() * 12) + 1);
document.getElementById("audi").onclick = function () {
audiSpeed;
console.log(audiSpeed);
yourSpeed += audiSpeed;
console.log(yourSpeed);

};



var viperSpeed = Math.floor((Math.random() * 12) + 1);
document.getElementById("viper").onclick = function () {
viperSpeed;
console.log(viperSpeed);
yourSpeed += viperSpeed;
console.log(yourSpeed);
};


var chargerSpeed = Math.floor((Math.random() * 12) + 1);
document.getElementById("charger").onclick = function () {
chargerSpeed;
console.log(chargerSpeed);
yourSpeed += chargerSpeed;
console.log(yourSpeed);
};


var policeSpeed = Math.floor((Math.random() * 12) + 1);
document.getElementById("police").onclick = function () {
policeSpeed;
console.log(policeSpeed);
yourSpeed += policeSpeed;
console.log(yourSpeed);
};




    





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


// var userText = document.getElementById("user-text");<------change number on doc, i.e- "Speed Limit" your