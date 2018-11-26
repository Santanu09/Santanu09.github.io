// 2d arrays grid assigment
// Talha Prodhan
// Nov 14, 2018

//Extra for Experts: Other than just creating a 2d arrays grid/basic requirement for the assignment,

let gamestate;
let hoveringButton;

function setup() {
  gamestate = 1;

}

function draw(){

}

function menu() {
  //This function displayes all of the main menu
  background(10);
  // display();
  //All the menu text stuff
  fill(0, 255, 0);
  textSize(55);
  text("2D PLATFORMER GAME", width/2, 100);
  textSize(20);
  text("There are two snakes in a battle.", width/2, 150);
  text("A green one (WASD controls), and a blue one (IJKL controls)", width/2, 200);
  text("Eat the red food to get longer", width/2, 250);
  text("If you hit your tail, or the tail of the other snake, you lose", width/2, 300);
  text("Press P to pause and have fun", width/2, 350);


  //Drawing the start button
  rectMode(CENTER);

  //If the mouse hovers over the button, using a state variable, it will change color.
  if (collidePointRect(mouseX, mouseY, width/2 - 150, 450, 300, 100)) {
    hoveringButton = true;
    if (mouseIsPressed) {
      gamestate ++;
      //If they hit the button, the game will begin
    }
  }
  else {
    hoveringButton = false;
  }

  if (hoveringButton) {
    //Changing the fill colors
    fill(60, 0, 0);
  }
  else {
    fill(255, 0, 0);
  }

  rect(width/2, 500, 300, 100);
  //Start button
  rectMode(CORNER);

  fill(255);
  textSize(35);
  text("START", width/2, 510);
  //Putting text into the button
}
