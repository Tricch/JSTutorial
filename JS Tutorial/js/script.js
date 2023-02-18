let changeText = document.getElementById("demo");
let changeImage = document.getElementById("image");

// Display Hidden Text on container 1
function displayText(){
    changeText.style.display = "block";
    changeText.style.color = "white";
    changeText.style.fontSize = "50px";
    changeText.style.textAlign = "center";
}

// Turn on Light
function bulbOn(){
    changeImage.src = "img/pic_bulbon.gif";
    alert("Do you want to turn on the light?");
}

// Turn off Light
function bulbOff() {
    changeImage.src = "img/pic_bulboff.gif";
}