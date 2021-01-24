const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var base1,base2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon,polygonImage;
var slingShot1;

function preload(){
 
    polygonImage = loadImage("polygon.png");

}

function setup(){
    createCanvas(1000,700);

    engine = Engine.create();
    world = engine.world;

    base1 = new ground(400,305,350,20);

    block1 = new block(300,275,30,40);
    block2 = new block(330,275,30,40);
    block3 = new block(360,275,30,40);
    block4 = new block(390,275,30,40);
    block5 = new block(420,275,30,40);
    block6 = new block(450,275,30,40);
    block7 = new block(480,275,30,40);

    block8 = new block(330,235,30,40);
    block9 = new block(360,235,30,40);
    block10 = new block(390,235,30,40);
    block11 = new block(420,235,30,40);
    block12 = new block(450,235,30,40);

    block13 = new block(360,195,30,40);
    block14 = new block(390,195,30,40);
    block15 = new block(420,195,30,40);

    block16 = new block(390,155,30,40);

    ground1 = new ground(500,700,1000,40);

    var polygonOptions = {
        isStatic: false,
        density: 0.8
    }
    
    polygon = Bodies.circle(50,200,40,polygonOptions);
    World.add(world,polygon);

    slingShot1 = new slingShot(polygon,{x:100,y:200});


    Engine.run(engine);


}

function draw(){
    background("white");
    Engine.update(engine);

    var pos = polygon.position;
    imageMode(CENTER);
    image(polygonImage,pos.x,pos.y,40,40);

    ground1.display();

    base1.display();
    
    fill("skyBlue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("blue");
    block13.display();
    block14.display();
    block15.display();

    fill("grey");
    block16.display();

    
    slingShot1.display();

   
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot1.fly();
    
}
