// ============================NOTES===================================//
// starting random number
// wins, win counter, 
// losses, losses counter,
// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.
// if yourSpeed === speedLimit {you win}!
// if yourSpeed > speedLimit {you lose, you blew your engine}, start new game


// ===============================Variables================================//
// var cars = ["audi", "viper", "charger", "popo"];
var speedLimit;
var yourSpeed = 0;
var wins = document.getElementById("winCounter").innerHTML;
var losses = 0;
var reset;


var audiSpeed;
var viperSpeed;
var chargerSpeed;
var policeSpeed;



function speedLimit() {
    speedLimit = Math.floor((Math.random() * 101) + 19);
    // console.log(speedLimit);
    document.getElementById("speedLimit").innerHTML = (speedLimit + " MPH");

};




var audiSpeed = Math.floor((Math.random() * 12) + 1);
document.getElementById("audi").onclick = function () {
    audiSpeed;
    // console.log(audiSpeed);
    yourSpeed += audiSpeed;
    // console.log(yourSpeed);
    document.getElementById("yourSpeed").innerHTML = (yourSpeed + " MPH");
    if (yourSpeed > speedLimit) {
        alert("!!!!!!!EXPLOOOOOSSSSSSSSIIIIIIOOOOOOONNNNNNSSSSSSSSSS!!!!!YOU LOSE!!!!");
        losses++;
    } else if (yourSpeed === speedLimit) {
        alert("YOU WIN");
        wins++;
        
        
    };
    
    
    document.getElementById("winCounter").innerHTML = wins;
    console.log(losses);
    console.log(wins);

};
var viperSpeed = Math.floor((Math.random() * 12) + 1);
document.getElementById("viper").onclick = function () {
    viperSpeed;
    // console.log(viperSpeed);
    yourSpeed += viperSpeed;
    // console.log(yourSpeed);
    document.getElementById("yourSpeed").innerHTML = (yourSpeed + " MPH");
    if (yourSpeed > speedLimit) {
        alert("!!!!!!!EXPLOOOOOSSSSSSSSIIIIIIOOOOOOONNNNNNSSSSSSSSSS!!!!!YOU LOSE!!!!");
        // losses++;
    } else if (yourSpeed === speedLimit) {
        alert("YOU WIN");
    }; 
    

};
var chargerSpeed = Math.floor((Math.random() * 12) + 1);
document.getElementById("charger").onclick = function () {
    chargerSpeed;
    // console.log(chargerSpeed);
    yourSpeed += chargerSpeed;
    // console.log(yourSpeed);
    document.getElementById("yourSpeed").innerHTML = (yourSpeed + " MPH");
    if (yourSpeed > speedLimit) {
        alert("!!!!!!!EXPLOOOOOSSSSSSSSIIIIIIOOOOOOONNNNNNSSSSSSSSSS!!!!!YOU LOSE!!!!");
        // losses++;
    } else if (yourSpeed === speedLimit) {
        alert("YOU WIN");
    };

};
var policeSpeed = Math.floor((Math.random() * 12) + 1);
document.getElementById("police").onclick = function () {
    policeSpeed;
    // console.log(policeSpeed);
    yourSpeed += policeSpeed;
    // console.log(yourSpeed);
    document.getElementById("yourSpeed").innerHTML = (yourSpeed + " MPH");
    if (yourSpeed > speedLimit) {
        alert("!!!!!!!EXPLOOOOOSSSSSSSSIIIIIIOOOOOOONNNNNNSSSSSSSSSS!!!!!YOU LOSE!!!!");
        // losses++;
    } else if (yourSpeed === speedLimit) {
        alert("YOU WIN");
    };

};




// ==================== Call Functions==============================//
speedLimit();


    // console.log(yourSpeed);