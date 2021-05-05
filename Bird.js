class Bird extends Baseclass {

    constructor(x,y){

         super(x,y,60,60); 
         this.image=loadImage("images/bird.png");
         this.img=loadImage("images/smoke.png");
         this.trajectory=[];
    
    }   

    display(){

        super.display();

        if(this.body.velocity.x > 10 && this.body.position.x > 350){

        var birdpos = [this.body.position.x,this.body.position.y];
        this.trajectory.push(birdpos);
        } 

        for(var i=0 ; i<this.trajectory.length; i++){
            image(this.img,this.trajectory[i][0],this.trajectory[i][1])
        }

    }
}