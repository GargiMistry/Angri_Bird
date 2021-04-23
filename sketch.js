const Engine = Matter.Engine;
const World  = Matter.World ;
const Bodies = Matter.Bodies;

var myEngine,myWorld,box1,box2,ground;
var pig1,bird1;

function setup(){
    createCanvas(1200,600);

    myEngine = Engine.create();
    myWorld  = myEngine.world;

    ground=new Ground(600,590,1200,20);
    box1=new Box(800,555);
    box2=new Box(1000,555);
    pig1=new Pig(900,560);

    bird1=new Bird(100,100);
    log1=new Log(900,510,300,PI/2);
    box3=new Box(800,465);
    box4=new Box(1000,465);
    pig2=new Pig(900,470);

    log2=new Log(900,420,300,PI/2);
    box5=new Box(900,375);
    log3=new Log(800,370,150,PI/7);
   log4=new Log(1000,370,150,-PI/7);
}

function draw(){ 

    background(0);

    Engine.update(myEngine);

    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    bird1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}