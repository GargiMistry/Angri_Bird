class Bird extends Baseclass {

    constructor(x,y){

         super(x,y,60,60); 
         this.image=loadImage("images/bird.png");
    
    }   

    display(){

        super.display();

        var pos = this.body.position;

        pos.x = mouseX;
        pos.y = mouseY;
 
    }
}