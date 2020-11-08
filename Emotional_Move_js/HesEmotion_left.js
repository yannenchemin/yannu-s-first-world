let EmotionBoy = function(position) {
  this.origin = position.copy();
  this.particles = [];
};
//-------------------------------------------------------------------------
EmotionBoy.prototype.addParticle = function() {
  this.particles.push(new detail_of_mind_boy(this.origin));
};
//-------------------------------------------------------------------------
EmotionBoy.prototype.run = function() {
  for (let i = this.particles.length - 1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isfeel()) {
      this.particles.splice(i, 1);
    }
  }
};
//------------------------------------------------------------------------

let detail_of_mind_boy = function(position) {
  this.acceleration = createVector(-0.1, 0.05); //가속도: 뿜어져나오는 방향,뿜어져나오는 각도
  this.share = createVector(random(10, 15), random(-5, 1)); //속도: 1번 파라미터는  퍼지는 파티클 거리(속도), 2번은 뿜어져나오는 통로굵기
  this.position = position.copy();
  this.unrequited_love = 255; // 숫자가 적어질 수록 전체적으로 파티클이 흐려짐
};
//-------------------------------------------------------------------------
detail_of_mind_boy.prototype.run = function() {
  this.move();
  this.showMe();
};
//-------------------------------------------------------------------------

detail_of_mind_boy.prototype.move = function() {
  this.share.add(this.acceleration); //속도에 가속도를 더함
  this.position.add(this.share); // 포지션에 속도를 더함
  this.unrequited_love -= 2; //숫자가 올라갈 수록 튀어 올라온 파티클이 빠르게 흐려짐

};
//-------------------------------------------------------------------------

detail_of_mind_boy.prototype.showMe = function() {
  stroke(200, this.unrequited_love);
  noStroke();
  fill(220, this.unrequited_love);
  ellipse(this.position.x, this.position.y, 12, 12);
};
//-------------------------------------------------------------------------

detail_of_mind_boy.prototype.isfeel = function() {
  return this.unrequited_love < 0;  //짝사랑
};