void draw(){
  fill(0, 0, 0, 25);
  strokeWeight(0);
  stroke(0, 0, 0, 0);
  rect(0, 0, width, height);
}

void mouseDragged(){

	float speed = dist(pmouseX, pmouseY, mouseX, mouseY);
	float w = map(speed, 0, 100, 1, 40);
	float a = map(speed, 0, 100, 125, 255);
	float r = map(mouseX, 0, width, 1, 255);
	float g = map(mouseY, 0, height, 1, 255);
	float b = map(dist(mouseX, mouseY, width / 2, height / 2), 0, height, 1, 255);
	strokeWeight(w);
	stroke(r, g, 0, a);
	line(pmouseX, pmouseY, mouseX, mouseY);

}