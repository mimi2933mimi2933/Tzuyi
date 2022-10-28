//Tutorial: https://thecodingtrain.com/challenges/147-chrome-dinosaur-game//
let jumpme;
let jImg;
let pImg;
let bImg;
let pumpkin = [];
let soundClassifier;

function preload(){
  const options = { probabilityThreshold: 0.95 };
  soundClassifier =ml5.soundClassifier('SpeechCommands18w', options)
  jImg = loadImage("jumpme.gif");
  pImg = loadImage("pumpkin.gif");
  bImg = loadImage("background.jpeg");

}

// function mousePressed(){
//     pumpkin.push(new Pumpkin());
// }

function setup() { 
  createCanvas(800, 600);
  jumpme = new Jumpme();
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results){
  if(error){
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if(results[0].label == 'up'){ 
    //result is an array with label and confidence sore, so [0] means the 1st label -> label like 'up'
    
    jumpme.jump();
  }
  
}

function keyPressed(){
  if(key == " "){
    jumpme.jump();
  }
}

function draw() {
  if (random(1) < 0.005){
    pumpkin.push(new Pumpkin());
  }
  
  collideRectRect(this.x, this.y, this.r, pumpkin.x, pumpkin.y, pumpkin.r);
  
  background(bImg);
  for (let p of pumpkin){
    p.move();
    p.show();
    if (jumpme.hits(p)){
      console.log('game over');
      noLoop();
  
  }
  jumpme.show();
  jumpme.move();
  }

  
}