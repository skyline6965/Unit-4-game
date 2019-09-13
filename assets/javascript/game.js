// ============================NOTES===================================//
// starting random number
// wins, win counter, 
// losses, losses counter,
// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.
// if yourSpeed === speedLimit {you win}!
// if yourSpeed > speedLimit {you lose, you blew your engine}, start new game


// ===============================Variables================================//
// var cars = ["audi", "viper", "charger", "police"];
var speedLimit;
var yourSpeed = 0;
var wins = 0;
var losses = 0;
var reset;


var audiSpeed;
var viperSpeed;
var chargerSpeed;
var policeSpeed;



function speedLimit() {
    speedLimit = Math.floor((Math.random() * 101) + 19);
    
    document.getElementById("speedLimit").innerHTML = (speedLimit + " MPH");
};


var audiSpeed = Math.floor((Math.random() * 12) + 1);
document.getElementById("audi").onclick = function () {
    audiSpeed;
    yourSpeed += audiSpeed;
    document.getElementById("yourSpeed").innerHTML = (yourSpeed + " MPH");
    if (yourSpeed > speedLimit) {
        alert("!!!!!!!EXPLOOOOOSSSSSSSSIIIIIIOOOOOOONNNNNNSSSSSSSSSS!!!!!YOU LOSE!!!!");
        document.getElementById("lossesCounter").innerHTML = losses;
        losses++;
        document.location.reload();
    } else if (yourSpeed === speedLimit) {
        alert("YOU WIN");
        wins++;
        document.getElementById("winCounter").innerHTML = wins;
        document.location.reload();
    };



};
var viperSpeed = Math.floor((Math.random() * 12) + 1);
document.getElementById("viper").onclick = function () {
    viperSpeed;
    
    yourSpeed += viperSpeed;
    
    document.getElementById("yourSpeed").innerHTML = (yourSpeed + " MPH");
    if (yourSpeed > speedLimit) {
        alert("!!!!!!!EXPLOOOOOSSSSSSSSIIIIIIOOOOOOONNNNNNSSSSSSSSSS!!!!!YOU LOSE!!!!");
        document.getElementById("lossesCounter").innerHTML = losses;
        losses++;
        document.location.reload();
    } else if (yourSpeed === speedLimit) {
        alert("YOU WIN");
        wins++;
        document.getElementById("winCounter").innerHTML = wins;
        document.location.reload();
    };


};
var chargerSpeed = Math.floor((Math.random() * 12) + 1);
document.getElementById("charger").onclick = function () {
    chargerSpeed;
    
    yourSpeed += chargerSpeed;
    
    document.getElementById("yourSpeed").innerHTML = (yourSpeed + " MPH");
    if (yourSpeed > speedLimit) {
        alert("!!!!!!!EXPLOOOOOSSSSSSSSIIIIIIOOOOOOONNNNNNSSSSSSSSSS!!!!!YOU LOSE!!!!");
        document.getElementById("lossesCounter").innerHTML = losses;
        losses++;
        document.location.reload();
    } else if (yourSpeed === speedLimit) {
        alert("YOU WIN");
        wins++;
        document.getElementById("winCounter").innerHTML = wins;
        document.location.reload();
    };

};
var policeSpeed = Math.floor((Math.random() * 12) + 1);
document.getElementById("police").onclick = function () {
    policeSpeed;
    
    yourSpeed += policeSpeed;
    
    document.getElementById("yourSpeed").innerHTML = (yourSpeed + " MPH");
    if (yourSpeed > speedLimit) {
        alert("!!!!!!!EXPLOOOOOSSSSSSSSIIIIIIOOOOOOONNNNNNSSSSSSSSSS!!!!!YOU LOSE!!!!");
        document.getElementById("lossesCounter").innerHTML = losses;
        losses++;
        document.location.reload();
    } else if (yourSpeed === speedLimit) {
        alert("YOU WIN");
        wins++;
        document.getElementById("winCounter").innerHTML = wins;
        document.location.reload();
    };

};


console.log(audiSpeed);
console.log(viperSpeed);
console.log(chargerSpeed);
console.log(policeSpeed);






// ==================== Call Functions==============================//
speedLimit();


    // console.log(yourSpeed);