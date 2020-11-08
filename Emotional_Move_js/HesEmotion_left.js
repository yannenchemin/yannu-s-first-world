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

let detail_of_mind_boy = function(position) { // 나의 행동: 내가 그녀에게 무언가를 보여줬을까?
  this.acceleration = createVector(-0.1, 0.05);
  this.share = createVector(random(10, 15), random(-5, 1));
  this.position = position.copy();
  this.unrequited_love = 255;
};
//-------------------------------------------------------------------------
detail_of_mind_boy.prototype.run = function() {
  this.move();
  this.showMe();
};
//-------------------------------------------------------------------------

detail_of_mind_boy.prototype.move = function() {
  this.share.add(this.acceleration);
  this.position.add(this.share);
  this.unrequited_love -= 2;
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
  return this.unrequited_love < 0;  //짝사랑...
};
