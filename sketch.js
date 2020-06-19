const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var ground, world; 
var div1, div2, div3, div4, div5, div6, div7, div8; 

var p; 
var i;  
var b; 
var x,y,w,h;
var cols =11; 
var rows=10;

var particles =[]; 
var plinkos =[];  
var bounds =[]; 
var divisions =[]; 
var divisionHeight=300; 

function setup() {
  createCanvas(480,800); 
  engine = Engine.create();
  world = engine.world;  
  world.gravity.y=2; 

  newParticle(); 
  var spacing= width/cols; 
 for (var j=0;j< rows;j++){ 
    for (var i=0;i< cols;i++){ 
     var x=i* spacing;
     if(j % 2==0){ 
      x += spacing/2; 
     }
     
      var y=spacing+j*spacing;
      var p=new Plinko(x,y,8); 
       plinkos.push(p);
  } 
} 

  div1= new Division(0,700,10,400); 
  div2= new Division(100,700,10,400);
  div3= new Division(200,700,10,400);
  div4= new Division(300,700,10,400);
  div5= new Division(400,700,10,400);
  div6= new Division(480,400,10,800);
  div7= new Division(-1,400,10,900);
  div8= new Division(475,700,10,400);

  ground= new Ground(480, 790, 1200,20);  
  
  
} 

function newParticle(){ 
  p= new Particle(240,0,10); 
  particles.push(p);  
 
 
}

function draw() {
  

  if(frameCount% 90==0){  
   newParticle(); 
  }

  background(0,0,0);  
  Engine.update(engine); 
  
  for (i =0; i< particles.length; i++) 
  { 
    particles[i].display(); 
   
  } 
  for (i =0; i< plinkos.length; i++) 
  { 
    plinkos[i].display(); 
  }


  
  ground.display();  
 
  p.display(); 
  

  div1.display(); 
  div2.display(); 
  div3.display();
  div4.display();
  div5.display(); 
  div6.display();
  div7.display(); 
  div8.display();
}