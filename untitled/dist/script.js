function example1() {
  background(220);
  noStroke();
  fill(0, 255, 0);
  rect(50, 50, 100, 100);

  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(75, 100, 40, 40);

  noFill();
  rect(105, 80, 40, 40);
}

function setup() {
  createCanvas(200, 200);
  example1();
}