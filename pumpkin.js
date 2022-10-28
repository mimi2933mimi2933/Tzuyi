class Pumpkin{
  
  constructor(){
    this.r = 30;
    this.x = width;
    this.y = height - this.r;
  }
  
  
  move(){
    this.x -= 7;
  }
    
    show(){
      image(pImg, this.x, this.y, this.r, this.r);
      //rect(this.x , this.y, this.r, this.r);
      // ellipseMode(CORNER);
      // ellipse(this.x , this.y, this.r, this.r);
    }
}