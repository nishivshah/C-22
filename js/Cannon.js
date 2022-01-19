class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
  }
  
  show(){
    //var pos = this.body.position;
    push();
    imageMode(CENTER);
    //stroke(255);
    //fill("red");
    image(cannonBaseimg,this.x, this.y, this.width, this.height);
    image(canonimg,170,130,120,120,10);
    pop();
  }
}
