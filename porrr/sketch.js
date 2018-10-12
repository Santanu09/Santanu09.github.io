// interactive scene
// Santanu Deb
//  10/4/2018
//
// Extra for Experts:
// I added background Music and spell sound

//these are my variables
let cat;
let x, y;
let dx, dy;
let spellSound;
let backgroundMusic;

//function for loading media
function preload() {
  backgroundMusic = loadSound("assets/mlg.mp3");
  spellSound = loadSound("assets/hitmaker.mp3");
  cat = loadImage("assets/cat.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //position of Cat
  x = width/2 - cat.width / 2;
  y = height/2 - cat.height / 2;

  //movement of Cat
  dx = random(3, 8);
  dy = random(3, 8);
  strokeWeight(2);
  //background music

  backgroundMusic.setVolume(0.2);
  backgroundMusic.loop();
}

function draw() {
  //random background color
  background(random(255),random(255),random(255));
  movecat();
  displaycat();
  // if mouse is clicked it changes the color of the crosshare
  if (mouseIsPressed){
    stroke(255);
  }
  else {
    stroke(237,34,93);
  }
  // it moves alone with the mouse movement
  line(mouseX-66, mouseY, mouseX+66, mouseY);
  line(mouseX, mouseY-66, mouseX, mouseY+66);

  //make sound when mouse button is pressed
  if (keyIsDown === "27") {
    backgroundMusic.setVolume(0.2);
    backgroundMusic.loop();
  }
}

function movecat() {
  // apply speed
  x += dx;
  y += dy;

  //check for bounce
  if (x + cat.width >= width || x <= 0) {
    dx = dx * -1;
  }
  if (y + cat.height >= height || y <= 0) {
    dy = dy * -1;
  }
}
//cat image
function displaycat() {
  image(cat, x, y);
}
//spell sound pressed when the mouse is pressed
function mousePressed() {
  background(0);
  noStroke();
  spellSound.play();
}
