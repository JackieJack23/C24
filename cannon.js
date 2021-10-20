class Cannon{
    constructor(x, y, w, h, angle){
        this.w = w;
        this.h = h;
        this.angle = angle
    }

display() { 
    fill("#676e6a"); 
    push(); 
    translate(this.x, this.y); 
    rotate(this.angle);
     rect(-10, -20, this.width, this.height); 
    pop(); 
    arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI); 
    noFill();
 }
}