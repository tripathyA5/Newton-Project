class Bob {
    constructor(x,y,r){
    var options={
        restitution:0.3,
        fricton:0.5,
        density:1.2,
        isStatic:false
        
    }
   // this.image=loadImage("paper.png");
    this.r=r;
    this.x=x;
    this.y=y;
    this.body=Bodies.circle(x,y,this.r,options);
    World.add(world,this.body);
    }
    display(){
          var pos=this.body.position
          push();
          translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

}