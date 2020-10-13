const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var mConstraint;

function setup() {
  canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  pendulum1 = new Pendulum(340 - 100, 450, "#00b0ff");
  pendulum2 = new Pendulum(400 - 100, 450, "#e91e63");
  pendulum3 = new Pendulum(460 - 100, 450, "#ffc107");
  pendulum4 = new Pendulum(520 - 100, 450, "#e91e63");
  pendulum5 = new Pendulum(580 - 100, 450, "#00b0ff");

  sling1 = new Sling(pendulum1.body, { x: 340 - 100, y: 100 });
  sling2 = new Sling(pendulum2.body, { x: 400 - 100, y: 100 });
  sling3 = new Sling(pendulum3.body, { x: 460 - 100, y: 100 });
  sling4 = new Sling(pendulum4.body, { x: 520 - 100, y: 100 });
  sling5 = new Sling(pendulum5.body, { x: 580 - 100, y: 100 });
}

function draw() {
  background(0);
  Engine.update(engine);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}
