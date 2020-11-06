let EmotionGirl = function(position) {
  this.origin = position.copy();
  this.particles = [];
};
//-------------------------------------------------------------------------
EmotionGirl.prototype.addParticle = function() {
  this.particles.push(new detail_of_mind_girl(this.origin));
};
//-------------------------------------------------------------------------
EmotionGirl.prototype.run = function() {
  for (let i = this.particles.length - 1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isfeel()) {
      this.particles.splice(i, 1);
    }
  }
};
//-------------------------------------------------------------------------
let detail_of_mind_girl = function(position) {
  this.acceleration = createVector(1, -0.1); //뿜어져나오는 힘,뿜어져나오는 각도
  this.share = createVector(random(-30, -35), random(-1, 6)); //1번 파라미터는 좌우로 퍼지는 간격, 2번은 뿜어져나오는 통로굵기
  this.position = position.copy();
  this.Exterior_or_insensitivity = 255; // 숫자가 적어질 수록 전체적으로 파티클이 흐려짐
};
//-------------------------------------------------------------------------
detail_of_mind_girl.prototype.run = function() {
  this.move();
  this.ShowMe();
};
//-------------------------------------------------------------------------
detail_of_mind_girl.prototype.move = function() {
  this.share.add(this.acceleration);
  this.position.add(this.share);
  this.Exterior_or_insensitivity -= 2 

};
//-------------------------------------------------------------------------

detail_of_mind_girl.prototype.ShowMe = function() {
  stroke(200, this.Exterior_or_insensitivity);
  noStroke();
  fill(220, this.Exterior_or_insensitivity);
  ellipse(this.position.x, this.position.y, 12, 12);
};
//-------------------------------------------------------------------------

detail_of_mind_girl.prototype.isfeel = function() {
  return this.Exterior_or_insensitivity < 0  //외면 혹은 무감각
};
