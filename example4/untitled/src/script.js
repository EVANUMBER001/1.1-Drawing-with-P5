function setup() {
  createCanvas(400, 400);
  background(0, 0, 128);
  
  fill(0, 128, 0);
  stroke(255);
  strokeWeight(4);
  circle(200, 200, 200);

  fill(255);
  circle(200, 200, 170);

  fill(0, 128, 0);
  circle(200, 200, 150);

  fill(255, 0, 0);
  beginShape();
  for (let i = 0; i < 5; i++) {
    let angle = TWO_PI / 5 * i - HALF_PI;
    let x = 200 + cos(angle) * 70;
    let y = 200 + sin(angle) * 70;
    vertex(x, y);
    angle += TWO_PI / 10;
    x = 200 + cos(angle) * 30;
    y = 200 + sin(angle) * 30;
    vertex(x, y);
  }
  endShape(CLOSE);
}
