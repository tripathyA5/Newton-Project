class Chain{
    constructor(bodyA, bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offset=offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
           pointB:{x:this.offsetX,y:this.offsetY}      
          }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
      
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        var Anchor1x=pointA.x;
        var Anchor1y=pointA.y;
        var Anchor2x=pointB.x+this.offsetX;
        var Anchor2y=pointB.y+this.offsetY;
        strokeWeight(4);
        line(Anchor1x, Anchor1y, Anchor2x, Anchor2y);
    }
    
}