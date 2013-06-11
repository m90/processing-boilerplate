void setup(){
	size(640, 480);
	background(255,0,255);
}
void draw(){
}

void mouseDragged(){
	line(pmouseX, pmouseY, mouseX, mouseY);
}