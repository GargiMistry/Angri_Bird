class Box {

    constructor(x,y){

        var boun = {
            restitution : 1
        }

        this.body = Bodies.rectangle(x,y,70,70,boun);
        this.width = 70;
        this.height = 70;
        World.add(myWorld,this.body); 
    
    }   

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill("yellow");
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}