// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// global variable
let ball;
let x = 350;
let speed;
let y = 350;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(x, y, 30, 30);

  if (x < width) {
    speed = -3;
  }
  if (x < 0) {
    x = 400;
  }
  x = x + speed;
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    y = y - 10;
  }
  else if (keyCode === DOWN_ARROW) {
    y = y + 10;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 5;
  }
  else if (keyCode === RIGHT_ARROW) {
    x = x + 5;
  }
}

function mousePressed() {
  if (mousePressed) {
    noLoop();
  }
  else {
    loop();
  }
}

function DodgeingCircle(){

}

function circles(){

}



 function initBombs() {
     for (let i = 0; i < numbofbombs; i++) {
         bombacel[i] = random(.02, .03);
         bombvel[i] = random(0, 5);
         bombposX[i] = random(zapperwidth + (0.5 * ball_width), width);
         bombposY[i] = random(-20, -0.5 * ball_width);
     }
 }


 function bombCollision() {
     var temp = 0.5 * (ball_width + bomb_diameter) - 2; 
     var distance;


     for (var i = 0; i < numbofbombs; i++) {
         distance = dist(xpoint, ypoint, bombposX[i], bombposY[i]);
         if (distance < temp) {
             return true;
         }
