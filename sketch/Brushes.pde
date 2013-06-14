void brush1(int x,int y, int px, int py, int lineWidth) {
  strokeWeight(lineWidth);
  ellipse(x,y,px,py);

  return;
}


void brush2(int x,int y, int px, int py, int lineWidth) {
  strokeWeight(lineWidth);
  pushMatrix();
  translate(x,y);
  rotate(random(px));
  rect(0+random(50),0+random(50),10,10);
  popMatrix();
  return;
}

void brush3(int x,int y, int px, int py, int lineWidth) {
  strokeWeight(lineWidth);
  pushMatrix();
  translate(x,y);
  rotate(random(px));
  line(0+random(50),0+random(50),0,0);
  rotate(random(px));
  line(0+random(50),0+random(50),0,0);
  rotate(random(px));
  line(0+random(50),0+random(50),0,0);
  popMatrix();

  return;
}

void brush4(int x,int y, int px, int py, int lineWidth) {
  strokeWeight(lineWidth);
  line(px,py,x,y);
  line(px,py,x,y);
  line(width/2+((width/2)-px),py,width/2+((width/2)-x),y);
  line(px,height/2+((height/2)-py),x,height/2+((height/2)-y));
  line(width/2+((width/2)-px),height/2+((height/2)-py),width/2+((width/2)-x),height/2+((height/2)-y));
  return;
}

void brush5(int x,int y, int px, int py, int lineWidth) {
  strokeWeight(lineWidth);
  line(px,py,x,y);
  line(width/2+((width/2)-px),py,width/2+((width/2)-x),y);
  line(px,height/2+((height/2)-py),x,height/2+((height/2)-y));
  line(width/2+((width/2)-px),height/2+((height/2)-py),width/2+((width/2)-x),height/2+((height/2)-y));
  line(width/2+((width/2)-py),width/2-((width/2)-px),width/2+((width/2)-y),width/2-((width/2)-x));
  line(height/2-((height/2)-py),width/2-((width/2)-px),height/2-((height/2)-y),width/2-((width/2)-x));
  line(width/2+((width/2)-py),height/2+((height/2)-px),width/2+((width/2)-y),height/2+((height/2)-x));
  line(width/2-((width/2)-py),height/2+((height/2)-px),width/2-((width/2)-y),height/2+((height/2)-x));
  return;
}

void brush6(int x,int y, int px, int py, int lineWidth) {
  strokeWeight(lineWidth);
  px=px+random(50);
  py=py+random(50);
  ellipse(x,y,px,py);
  ellipse(width/2+((width/2)-x),y,px,py);
  ellipse(x,height/2+((height/2)-y),px,py);
  ellipse(width/2+((width/2)-x),height/2+((height/2)-y),px,py);
  ellipse(width/2+((width/2)-y),width/2-((width/2)-x),px,py);
  ellipse(height/2-((height/2)-y),width/2-((width/2)-x),px,py);
  ellipse(width/2+((width/2)-y),height/2+((height/2)-x),px,py);
  ellipse(width/2-((width/2)-y),height/2+((height/2)-x),px,py);
  return;
}

void brush7(int x,int y, int px, int py, int lineWidth) {
  strokeWeight(lineWidth);
  line(px,py,x,y);
  line(width/2+((width/2)-px),py,width/2+((width/2)-x),y);
  return;
}
