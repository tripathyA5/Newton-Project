class Roof{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,150,800,20,options);
        World.add(world,this.body);
this.width=800;
this.height=20;
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}