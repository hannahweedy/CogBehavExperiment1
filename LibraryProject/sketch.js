var angle = 0

function setup() {
  createCanvas(800, 800);
}



function draw() {
  background(0,50);
  stroke(255,255,255);
  translate(400, height); // changes where the origin is 
  branch(200);


  // drawing the trunk of the fractal tree
  //var length ;
  //line(200, height, 200, height - length);
}

/*function mousePressed(){
  branch (200);
}
*/

// make function to draw branch
function branch(length){

  //mousePressed(branch);

  line(0, 0, 0, -length); // redraws branch at the new origin
  translate(0, -length); // translates new origin to end of original branch
  // so new branch can be drawn
  rotate(0);
  if (length > 20) {
  push();
  rotate(mouseX/1000, mouseY/1000);
  branch(length * 0.67);
  pop();
  push();
  rotate(- (mouseX/1000), -(mouseY/1000));
  branch(length * 0.67);
  pop();

  } // this if statement means that the line will not be drawn if it smaller than 4 px
  //line(0, 0, 0, -length * 0.5 ); // redraws branch at the new origin
                                 // * 0.5 makes branch smaller
   
                                 

}                              




