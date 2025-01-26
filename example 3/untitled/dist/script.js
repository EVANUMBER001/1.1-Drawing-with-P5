function setup() {
  createCanvas(400, 200);
  background(0);
  
  fill(255, 204, 0);
  noStroke();
  arc(100, 100, 100, 100, radians(45), radians(315), PIE);

  fill(255, 0, 0);
  arc(250, 100, 100, 100, radians(180), radians(0), OPEN); // Rounded top of the ghost
  rect(200, 100, 100, 50); // Flat base of the ghost

  fill(255);
  ellipse(230, 80, 20, 30);
  ellipse(270, 80, 20, 30);

  fill(0, 0, 255);
  ellipse(230, 80, 10, 15);
  ellipse(270, 80, 10, 15);
}