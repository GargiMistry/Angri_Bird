class Bird {

    constructor(x,y){

        var boun = {
            restitution : 1,
            density : 3
        }

        this.body = Bodies.rectangle(x,y,60,60,boun);
        this.width = 60;
        this.height = 60;
        World.add(myWorld,this.body); 
    
    }   

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        pos.x = mouseX;
        pos.y = mouseY;
 
        push();
        fill("red");
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}