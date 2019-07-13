function Enemy(weakness, atk1, atk2) {
  this.weakness = weakness;
  this.atk1 = atk1;
  this.atk2 = atk2;

  this.hp = 100;

  this.damage = function(dmg) {
    this.hp = this.hp - dmg;
  };
}

var enemy1 = new Enemy("physical", "fire", "ice");
