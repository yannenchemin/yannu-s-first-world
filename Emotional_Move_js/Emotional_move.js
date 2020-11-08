//얀의 개인적인 감정...
let her;
let he;
let sad_gesture = 0;

function setup() {
  createCanvas(1000, 500);
  her = new EmotionGirl(createVector(width + 40, height / 2)); //오른쪽
  he = new EmotionBoy(createVector(10, height / 2)); //왼쪽
}

function draw() {

  background(0);
  noFill();
  stroke(255);
  fill(255);
  ellipse(250, 250, sad_gesture, 310);
  fill(0);
  ellipse(250, 250, sad_gesture, 300);


  if(sad_gesture >= 0){
   for(let j = 0; j < 150;  j++){
   sad_gesture = sad_gesture + 0.01;
     }
  }
   if(sad_gesture >= 120){
   for(let k = 0; k < 150;  k++){
   sad_gesture = sad_gesture -0.01;
     }
  }

  print(sad_gesture);

  fill(255);
  ellipse(800, 250, 150, 310);
  fill(0);
  ellipse(800, 250, 150, 300);



  her.addParticle();
  her.run();
  he.addParticle();
  he.run();

}
