// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cat;
let x, y;
let dx, dy;
let spellSound;
let backgroundMusic;


function preload() {
  backgroundMusic = loadSound("assets/mlg.mp3");
  spellSound = loadSound("assets/hitmaker.mp3");
  cat = loadImage("assets/cat.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2 - cat.width / 2;
  y = height/2 - cat.height / 2;
  dx = random(3, 8);
  dy = random(3, 8);
  strokeWeight(2);
  backgroundMusic.setVolume(0.2);
  backgroundMusic.loop();
}

function draw() {
  background(random(255),random(255),random(255));
  movecat();
  displaycat();
  if (mouseIsPressed){
    stroke(255);
  }
  else {
    stroke(237,34,93);
  }
  line(mouseX-66, mouseY, mouseX+66, mouseY);
  line(mouseX, mouseY-66, mouseX, mouseY+66);
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

function displaycat() {
  image(cat, x, y);
}

function mousePressed() {
  background(0);
  noStroke();
  spellSound.play();
}
