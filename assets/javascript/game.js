//enemy object constructor
function Enemy(weakness, atk1, atk2) {
    this.weakness = weakness;
    this.atk1 = atk1;
    this.atk2 = atk2;

    this.hp = 100;
    this.down = false;
    this.alive = true;
    this.damage = function(dmg) {
        this.hp = this.hp - dmg;
    };
}

//this runs whenever the user attacks, it handles how much damage the enemies do to you
function enemyAtk() {
    if (!enemy1.down && enemy1.alive) {
        playerHP = playerHP - enemyDamage;
        $("#playerHPNumber").text(playerHP);
        $("#hpLoss1").html("<span class='hpLossNum'>" + enemyDamage + "</span> damage to you")
    } else if (enemy1.alive) {
        enemy1.down = false;
        $("#hpLoss1").text("Knocked down");
    }
    if (!enemy2.down && enemy2.alive) {
        playerHP = playerHP - enemyDamage;
        $("#playerHPNumber").text(playerHP);
        $("#hpLoss2").html("<span class='hpLossNum'>" + enemyDamage + "</span> damage to you")
    } else if (enemy2.alive) {
        enemy2.down = false;
        $("#hpLoss2").text("Knocked down");
    }
    if (!enemy3.down && enemy3.alive) {
        playerHP = playerHP - enemyDamage;
        $("#playerHPNumber").text(playerHP);
        $("#hpLoss3").html("<span class='hpLossNum'>" + enemyDamage + "</span> damage to you")
    } else if (enemy3.alive) {
        enemy3.down = false;
        $("#hpLoss3").text("Knocked down");
    }
    if (playerHP <= 0) {
        $("#anounceArea").html("You lose. Refresh to try again");
        playerAlive = false;
    }
}
//when enemy HP hits 0
function enemyKill() {
    $("#" + targeted).html("");
    $("#" + targeted + "HP").text("Dead");
    $("#" + targeted).attr("class", "")
    $("#" + targeted).css("background-color", "black");
    targetedObject.alive = false;
    if (targeted === "enemy1") {
        $("#hpLoss1").html("Enemy1 is Dead")
    } else if (targeted === "enemy2") {
        $("#hpLoss2").html("Enemy2 is Dead")
    } else if (targeted === "enemy3") {
        $("#hpLoss3").html("Enemy3 is Dead")
    }
    targeted = "";
    targetedObject = "";
    if (!enemy1.alive && !enemy2.alive && !enemy3.alive) {
        $("#anounceArea").html("You Win!!");
    }

}
//these are the funcitons that run for each of the attack buttons
function physicalAtk() {
    if (targeted && playerAlive) {
        //checks if correctly attacked weakness
        if (targetedObject.weakness === "physical") {
            targetedObject.damage(weaknessDamage);
            targetedObject.down = true;
            $("#dmgNum").text(weaknessDamage);
            $("#enemyTarget").text(targeted);
            $("#" + targeted + "HP").text(targetedObject.hp);
            $("#" + targeted).html("<img src='assets/images/Dead.png'></img>");
            if (targetedObject.hp <= 0) {
                enemyKill();
            }
        } else {
            // damage if you didn't hit their weakness
            targetedObject.damage(defaultPlayerDamage);
            $("#dmgNum").text(defaultPlayerDamage);
            $("#enemyTarget").text(targeted);
            $("#" + targeted + "HP").text(targetedObject.hp);
            if (targetedObject.hp <= 0) {
                enemyKill();
            }
        }

        enemyAtk();
    }
}

function fireAtk() {
    if (targeted && playerAlive) {
        //checks if correctly attacked weakness
        if (targetedObject.weakness === "fire") {
            targetedObject.damage(weaknessDamage);
            targetedObject.down = true;
            $("#dmgNum").text(weaknessDamage);
            $("#enemyTarget").text(targeted);
            $("#" + targeted + "HP").text(targetedObject.hp);
            $("#" + targeted).html("<img src='assets/images/Dead.png'></img>");
            if (targetedObject.hp <= 0) {
                enemyKill();
            }
        } else {
            // damage if you didn't hit their weakness
            targetedObject.damage(defaultPlayerDamage);
            $("#dmgNum").text(defaultPlayerDamage);
            $("#enemyTarget").text(targeted);
            $("#" + targeted + "HP").text(targetedObject.hp);
            if (targetedObject.hp <= 0) {
                enemyKill();
            }
        }
        if (targetedObject.hp <= 0) {
            enemyKill();
        }
        enemyAtk();
    }
}

function iceAtk() {
    if (targeted && playerAlive) {
        //checks if correctly attacked weakness
        if (targetedObject.weakness === "ice") {
            targetedObject.damage(weaknessDamage);
            targetedObject.down = true;
            $("#dmgNum").text(weaknessDamage);
            $("#enemyTarget").text(targeted);
            $("#" + targeted + "HP").text(targetedObject.hp);
            $("#" + targeted).html("<img src='assets/images/Dead.png'></img>");
            if (targetedObject.hp <= 0) {
                enemyKill();
            }
        } else {
            // damage if you didn't hit their weakness
            targetedObject.damage(defaultPlayerDamage);
            $("#dmgNum").text(defaultPlayerDamage);
            $("#enemyTarget").text(targeted);
            $("#" + targeted + "HP").text(targetedObject.hp);
            if (targetedObject.hp <= 0) {
                enemyKill();
            }
        }
        enemyAtk();
    }
}


//generating the enemy objects 
var enemy1 = new Enemy("physical", "fire", "ice");
var enemy2 = new Enemy("ice", "fire", "physical");
var enemy3 = new Enemy("fire", "physical", "ice");

//Damage numbers
var weaknessDamage = 20;
var defaultPlayerDamage = 10;
var enemyDamage = 5;

//holds the enemy that is currently targeted
var targeted = "";
var targetedObject;

//holds player HP
var playerHP = 100;
var playerAlive = true;

//click handlers for each of the attacks
$("#physical").on("click", physicalAtk);
$("#fire").on("click", fireAtk);
$("#ice").on("click", iceAtk);

//click handler for the enemy, sets the target to attack
$(".enemy").on("click", function() {
    if (playerAlive) {
        targeted = $(this).attr("id");
        console.log(targeted);
        $(".enemy").css("background-color", "black");
        $(this).css("background-color", "red");
        if (targeted === "enemy1") {
            targetedObject = enemy1;
        } else if (targeted === "enemy2") {
            targetedObject = enemy2;
        } else if (targeted === "enemy3") {
            targetedObject = enemy3;
        }
    }
});

//win state
if (!enemy1.alive && !enemy2.alive && !enemy3.alive) {
    $("#anounceArea").html("You Win");
}