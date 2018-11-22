<<<<<<< HEAD
// Project Title
=======
// 
>>>>>>> 2cb3ffb76a61f42107735953e591fb763258fbcf
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
<<<<<<< HEAD

let fish;
let grayFish;

function preload() {
  fish = loadImage("assets/fish.jpeg");
=======
// global variables

let x, y, radius;
let dx, dy;
let dvd, dvdColor;
let state;

function preload() {
  dvd = loadImage("images/logo.png");
>>>>>>> 2cb3ffb76a61f42107735953e591fb763258fbcf
}

function setup() {
  createCanvas(windowWidth, windowHeight);
<<<<<<< HEAD
  image(fish, 0, 0);
  grayFish = makeGrayscale(fish);
  image(grayFish, 0, 0);
}

function draw() {

}

function makeGrayscale(sourceImage) {
  let img = createImage(sourceImage.width, sourceImage.height);

  img.loadPixels();
  sourceImage.loadPixels();

  for (let x = 0; x < sourceImage.width; x++) {
    for (let y = 0; y < sourceImage.height; y++) {
      let p = sourceImage.get(x, y);

      let r = red(p);
      let g = green(p);
      let b = blue(p);

      let newPixel = color((r+g+b)/3, (r+g+b)/3, (r+g+b)/3);

      img.set(x, y, newPixel);
    }
  }

  img.updatePixels();
  return img;
=======
  x = width / 2;
  y = height / 2;
  radius = 50;
  dx = random(2, 5);
  dy = random(2, 5);
  dvdColor = color(0);
  state = 1;
}

function draw() {
  background(255);
  if (state === 1) {
    displayStartScreen();
  }
  if (state === 2) {
    moveThing();
    displayThing();
  }
}

function displayStartScreen() {
  let buttonWidth = 400;
  let buttonHeight = 200;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      state = 2;
    }
  }

  rect(leftSide, topSide, buttonWidth, buttonHeight);
}

function moveThing() {
  x += dx;
  y += dy;

  //check if bounce required
  if (y + dvd.height / 2 >= height || y - dvd.height / 2 <= 0) {
    dy = dy * -1;
    dvdColor = color(random(255), random(255));
  }

  if (x + dvd.width / 2 >= width || x - dvd.width / 2 <= 0) {
    dx = dx * -1;
    dvdColor = color(random(255), random(255));
  }
}

function displayThing() {
  fill(0);
  // ellipse(x, y, radius * 2, radius * 2);
  imageMode(CENTER);
  tint(dvdColor);
  image(dvd, x, y);
>>>>>>> 2cb3ffb76a61f42107735953e591fb763258fbcf
}
