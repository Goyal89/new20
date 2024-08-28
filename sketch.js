function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);  // Set the angle mode to degrees
}

function draw() {
  background(255);
  translate(width / 2, height / 2);  // Move the origin to the center
  rotate(-90);  // Rotate to start from the top (12 o'clock)

  let s = map(second(), 0, 60, 0, 360);
  let m = map(minute(), 0, 60, 0, 360);
  let h = map(hour() % 12, 0, 12, 0, 360);

  strokeWeight(8);
  
   ellipse(0,0,300,300);
  fill(246,)

  // Seconds hand
  stroke(255, 0, 0);
  line(0, 0, 100 * cos(s), 100 * sin(s));

  // Minutes hand
  stroke(0, 255, 0);
  line(0, 0, 75 * cos(m), 75 * sin(m));

  // Hours hand
  stroke(0, 0, 255);
  line(0, 0, 50 * cos(h), 50 * sin(h));
}