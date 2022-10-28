class Jumpme {
  constructor(){
    this.r = 100;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 1;
    
  } 

  jump(){ 
    if (this.y == height - this.r){ //to limit me jump while I am at the botto
      this.vy = -20; //add the velocity
    } 
    
  }
  
  hits(pumpkin){
    //from collisionCircleCircle
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = pumpkin.x + pumpkin.r * 0.5;
    let y2 = pumpkin.y + pumpkin.r * 0.5;
    
      // return collideRectRect(this.x, this.y, this.r, this.r, pumpkin.x, pumpkin.y, pumpkin.r, pumpkin.r);
    // change to collideCircleCircle
    return collideCircleCircle(x1, y1, this.r, x2, y2, pumpkin.r);
  }
  
  
  
  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
    
  }
  
  show(){
    image(jImg, this.x , this.y, this.r, this.r);
    //rect(this.x , this.y, this.r, this.r);
    //change to ellipse because we change collideRectRect to collideCircleCircle
  //   ellipseMode(CORNER);
  //   ellipse(this.x , this.y, this.r, this.r);
  }
}