var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var score=0;
 var particle;
 var turn=0;
 var gamestate=PLAY;
 var PLAY;
 
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  textSize(35)
  fill("white")
  text("Score "+score,20,30)
  text("500",10,700)
  text("500",90,700)
  text("500",170,700)
  text("500",250,700)
  text("100",330,700)
  text("100",410,700)
  text("100",490,700)
  text("200",570,700)
  text("200",650,700)
  text("200",730,700)
  if (gamestate==="end"){
    text("Game over" ,300 ,300)
  }
  Engine.update(engine);
 
  if (particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if (particle.body.position.x<300){
        score=score+500
        particle=null;
        if (turn>=5)gamestate="end";
      }
    }
    }
    if (particle!=null){
      particle.display();
      if(particle.body.position.y>760){
        if (particle.body.position.x>301){
          if (particle.body.position.x<600){
          score=score+100
          particle=null;
          if (turn>=5)gamestate="end";
          }
        }
      }
      }
      if (particle!=null){
        particle.display();
        if(particle.body.position.y>760){
          if (particle.body.position.x>601){
            if (particle.body.position.x<900){
            score=score+200
            particle=null;
            if (turn>=5)gamestate="end";
            }
          }
        }
        }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
   }
 
  //for (var j = 0; j < particles.length; j++) {
   
    // particles[j].display();
   //}
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if (gamestate!=="end"){
    turn++;
    particle=new Particle(mouseX,10,10,10)
  }
}