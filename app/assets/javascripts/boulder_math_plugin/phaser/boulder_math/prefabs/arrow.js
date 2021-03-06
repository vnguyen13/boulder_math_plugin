var Arrow = function (game, x, y, key,frame) {
  Phaser.Sprite.call(this, game, x, y, 'arrow', 0);

  this.scale.setTo(1);
  // this.anchor.setTo(1);

  this.animations.add('spin', [0,1,2,3,4,5,6,7]);
  this.start_spin = function() {
    this.animations.play('spin', 16, true);
  }

  this.stop_spin = function() {
    this.animations.stop();
  }
}

Arrow.prototype = Object.create(Phaser.Sprite.prototype);
Arrow.prototype.constructor = Arrow;
