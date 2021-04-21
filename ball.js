class Ball{
    constructor(x,y,radius){
    var options = {
        'restitution':0.4,
        'friction':0.005,
        'density':1
    }
    this.body=Bodies.circle(x,y,radius,options)
    this.r=radius;
    World.add(world,this.body);
    }

display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill('green');
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
}
}

