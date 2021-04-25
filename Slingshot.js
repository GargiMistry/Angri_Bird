class Slingshot{
    constructor(bodyA,pointB){
        var ab = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.05,
            length : 20
          
        }

        this.img1 = loadImage("images/sling1.png");
        this.img2 = loadImage("images/sling2.png");
        this.img3 = loadImage("images/sling3.png");

        this.pointB = pointB;
        this.sling = Constraint.create(ab);
        World.add(myWorld,this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.img1,258,103);
        image(this.img2,228,103);
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        push();

        if(pointA.x<250){
        strokeWeight(7);
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
        image(this.img3,pointA.x-30,pointA.y-10,15,30);
        }
        else{
            strokeWeight(4);
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
            image(this.img3,pointA.x+25,pointA.y-10,15,30);
        }
        pop();
        }
    }
}  