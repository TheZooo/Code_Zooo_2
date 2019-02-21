var w = window.innerWidth - 4; //window width subtracted by border size
var h = window.innerHeight - 4; //window height subtracted by border size

var inputSize = prompt("10 - 150"); //Input size by prompt
var inputSpeed = prompt("1 - 80"); //Input speed by prompt

var rectSize = 30; //Squaring the rectangle Size
var maxCapX = w - rectSize; //Stops the Rectangle from leaving to the right
var minCapX = 0; //Stops left
var maxCapY = h - rectSize; //Stops the Rectangle from leaving out the bottom
var minCapY = 0; //Stops top
        
var posX = 20; //X position of Rectangle
var posY = 20; //Y position of Rectangle
var prevPosX = 0; //lagged x position
var prevPosY = 0; //lagged y position
        
var xSpeed = 0; //X speed
var ySpeed = 0; //Y speed

var speedCap = 4; //speed cap for both speeds
var baseSpeedCap = 4; //to reset the speed cap
var sprintSpeed = baseSpeedCap + 4; //shift key speed
        
var keyAction = [false,false,false,false];

if (inputSize < 10 || inputSize > 150) { //checks parameters of input
  window.alert("Input size not in parameter. Using default");
} else { //Sets size to input
  rectSize = inputSize;
}
if (inputSpeed < 1 || inputSpeed > 80) { //checks parameters of input
  window.alert("Input speed not in parameter. Using default");
} else { //Sets speed to input
  speedCap = inputSpeed;
  baseSpeedCap = inputSpeed;
}
        
function setup() {
    createCanvas(w, h);
}

function draw() {
    //Background clear
    background(255);
    //Rectangle that moves
    stroke(0);
    strokeWeight(0);
    fill(color(100,209,209));
    rect(posX, posY, rectSize, rectSize);
    
    //Movement
    if (keyAction[0] === true && keyAction[1] === false) { //Left
      if (xSpeed < speedCap) {
        xSpeed++;
      } else if (xSpeed > speedCap) {
        xSpeed = speedCap;
      }
      posX -= xSpeed;
    }
    if (keyAction[1] === true && keyAction[0] === false) { //Right
      if (xSpeed < speedCap) {
        xSpeed++;
      } else if (xSpeed > speedCap) {
        xSpeed = speedCap;
      }
      posX += xSpeed;
    }
    if (keyAction[0] === false && keyAction[1] === false) { //Slowdown x speed (doesn't really matter)
      if (xSpeed > 0) {
        xSpeed--;
      }
    }
    if (keyAction[2] === true && keyAction[3] === false) { //Up
      if (ySpeed < speedCap) {
        ySpeed++;
      } else if (ySpeed > speedCap) {
        ySpeed = speedCap;
      }
      posY -= ySpeed;
    }
    if (keyAction[3] === true && keyAction[2] === false) { //Down
      if (ySpeed < speedCap) {
        ySpeed++;
      } else if (ySpeed > speedCap) {
        ySpeed = speedCap;
      }
      posY += ySpeed;
    }
    if (keyAction[2] === false && keyAction[3] === false) { //Slowdown y speed (doesn't really matter)
      if (ySpeed > 0) {
        ySpeed--;
      }
    }
    if (keyAction[4] === true) { //Shift raises speed cap
      speedCap = sprintSpeed;
    } else if (keyAction[4] === false) { //Defaults speed cap
      speedCap = baseSpeedCap;
    }
    
    //Barrier
    if (posX >= maxCapX) { //Stops Right
      posX = maxCapX;
    }
    if (posX <= minCapX) { //Stops Left
      posX = minCapX;
    }
    if (posY >= maxCapY) { //Stops Bottom
      posY = maxCapY;
    }
    if (posY <= minCapY) { //Stops Top
      posY = minCapY;
    }
}

function keyPressed() {
    if (keyCode == "65") { //Left Key(a)
      keyAction[0] = true;
    }
    if (keyCode == "68") { //Right Key(d)
      keyAction[1] = true;
    }
    if (keyCode == "87") { //Up Key(w)
      keyAction[2] = true;
    }
    if (keyCode == "83") { //Down Key(s)
      keyAction[3] = true;
    }
    if (keyCode == "16") { //Shift Key
      keyAction[4] = true;
    }
}
function keyReleased() {
    if (keyCode == "65") { //Left Key(a)
      keyAction[0] = false;
    }
    if (keyCode == "68") { //Right Key(d)
      keyAction[1] = false;
    }
    if (keyCode == "87") { //Up Key(w)
      keyAction[2] = false;
    }
    if (keyCode == "83") { //Down Key(s)
      keyAction[3] = false;
    }
    if (keyCode == "16") { //Shift Key
      keyAction[4] = false;
    }
}