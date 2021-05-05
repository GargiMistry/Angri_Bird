const Engine = Matter.Engine;
const World  = Matter.World ;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var myEngine,myWorld,bg;
var gs="onSling"

function preload(){
    getTime();
}

function setup(){
    createCanvas(1200,600);

    myEngine = Engine.create();
    myWorld  = myEngine.world;

    ground=new Ground(600,590,1200,20);
    box1=new Box(800,555);
    box2=new Box(1000,555);
    pig1=new Pig(900,560);

    bird=new Bird(100,100);
    log1=new Log(900,510,300,PI/2);
    box3=new Box(800,465);
    box4=new Box(1000,465);

    pig2=new Pig(900,470);
    log2=new Log(900,420,300,PI/2);
    box5=new Box(900,375);
    log3=new Log(800,360,150,PI/7);

   log4=new Log(1000,360,150,-PI/7);
   platform=new Ground(180,440,350,280);
   sling = new Slingshot(bird.body,{x:252,y:135});

}

function draw(){ 

    if(bg){
        background(bg);
    }
    else{
    background(1);
    }

    Engine.update(myEngine);

    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    bird.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    platform.display();
    sling.display();
}

function mouseDragged(){
    if(gs !=="launch"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
    }
}

function mouseReleased(){
    sling.fly();
    gs = "launch"
}

function keyPressed(){
    if(keyCode===32 && bird.body.speed<1){ 
        sling.attach(bird.body);
        gs = "onSling";
        Matter.Body.setPosition(bird.body,{x:252,y:135});
        bird.trajectory=[];
    }
}

async function getTime(){
    var res = await fetch("http://worldclockapi.com/api/json/est/now");
    var resj = await res.json();
    var dt = resj.currentDateTime;
    var hr = dt.slice(11,13);

    if(hr >= 06 && hr < 18){
        bk = "images/n2.jpg";
    }
    else{
        bk = "images/bg.png";          
    }

    bg = loadImage(bk);
}