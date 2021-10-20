const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}
function setup() {
  createCanvas(800,1200);

  engine = Engine.create();
  world = engine.world;

  tower = new Tower(150, 350, 160, 310);

  angle = -PI / 4;
  //cannon = new Cannon(180, 110, 100, 50, angle);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(backgroundImg);
  Engine.update(engine);
  tower.display();
  //cannon.display()
 
}

