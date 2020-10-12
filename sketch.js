const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0;

var bg = "sprites/bg.png"

function preload(){
    getBgImage();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    bird = new Hit(200,50,50,50);
    
    ground1 = new Ground(600,height,1200,20)
    ground2 = new Ground(600,250,300,10);
    ground3 = new Ground(1000,300,250,10);

    box1 = new Box(550,200,20,20);
    box2 = new Box(530,200,20,20);
    box3 = new Box(510,200,20,20);
    box4 = new Box(490,200,20,20);
    box5 = new Box(470,200,20,20);
    box6 = new Box(570,200,20,20);
    box7 = new Box(590,200,20,20);
    box8 = new Box(610,200,20,20);
    box9 = new Box(630,200,20,20);
    box10 = new Box(650,200,20,20);
    box11 = new Box(670,200,20,20);
    box12 = new Box(690,200,20,20);
    box13 = new Box(710,200,20,20);
    box14 = new Box(730,200,20,20);
    box15 = new Box(485,170,20,20);
    box16 = new Box(486,160,20,20);
    box17 = new Box(485,150,20,20);
    box18 = new Box(485,140,20,20);
    box19 = new Box(685,170,20,20);
    box20 = new Box(685,160,20,20);
    box21 = new Box(685,150,20,20);
    box22 = new Box(683,140,20,20);
    box23 = new Box(950,250,20,20);
    box24 = new Box(930,250,20,20);
    box25 = new Box(910,250,20,20);
    box26 = new Box(890,250,20,20);
    box27 = new Box(970,250,20,20);
    box28 = new Box(990,250,20,20);
    box29 = new Box(1010,250,20,20);
    box30 = new Box(1030,250,20,20);
    box31 = new Box(1050,250,20,20);
    box32 = new Box(1070,250,20,20);
    box33 = new Box(1090,250,20,20);
    box34 = new Box(1110,250,20,20);
    box35 = new Box(935,220,20,20);
    box36 = new Box(936,210,20,20);
    box37 = new Box(936,200,20,20);
    box38 = new Box(936,190,20,20);
    box39 = new Box(1105,220,20,20);
    box40 = new Box(1105,210,20,20);
    box41 = new Box(1105,200,20,20);
    box42 = new Box(1103,190,20,20);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg)

    noStroke();
    textSize(30);
    fill("white");
    text("score: "+score,width-300,50);

    Engine.update(engine);
    bird.display();
    ground1.display();
    ground2.display();
    ground3.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();
    box42.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    box31.score();
    box32.score();
    box33.score();
    box34.score();
    box35.score();
    box36.score();
    box37.score();
    box38.score();
    box39.score();
    box40.score();
    box41.score();
    box42.score();

}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}

async function getBgImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);
    if(hour>=06&&hour<=12){
        bg = "sprites/bg.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }
    backgroundImg = loadImage(bg);

}
