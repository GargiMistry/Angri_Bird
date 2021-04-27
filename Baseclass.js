class Baseclass{
    constructor(x,y,width,height,angle){

        var boun = {
            restitution : 0.5,
            friction : 2,
            density : 2
        }

        this.body = Bodies.rectangle(x,y,width,height,boun);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/base.png");
        World.add(myWorld,this.body); 
    
    }   

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}