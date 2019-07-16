//enemy object constructor
function Enemy(weakness, atk1, atk2) {
    this.weakness = weakness;
    this.atk1 = atk1;
    this.atk2 = atk2;

    this.hp = 100;
    this.down = false;

    this.damage = function(dmg) {
        this.hp = this.hp - dmg;
    };
    // this.kill = function(){

    // }
}

//this runs whenever the user attacks, it handles how much damage the enemies do to you
function enemyAtk() {
    if (!enemy1.down) {
        playerHP = playerHP - 10;
        $("#playerHPNumber").text(playerHP);
        $("#hpLoss1").html("<span class='hpLossNum'>10</span> damage to you")
    } else {
        enemy1.down = false;
        $("#hpLoss1").text("Knocked down");
    }
    if (!enemy2.down) {
        playerHP = playerHP - 10;
        $("#playerHPNumber").text(playerHP);
        $("#hpLoss2").html("<span class='hpLossNum'>10</span> damage to you")
    } else {
        enemy2.down = false;
        $("#hpLoss2").text("Knocked down");
    }
    if (!enemy3.down) {
        playerHP = playerHP - 10;
        $("#playerHPNumber").text(playerHP);
        $("#hpLoss3").html("<span class='hpLossNum'>10</span> damage to you")
    } else {
        enemy3.down = false;
        $("#hpLoss3").text("Knocked down");
    }
}
//these are the funcitons that run for each of the attack buttons
function physicalAtk() {
    if (targeted) {
        //checks if correctly attacked weakness
        if (targeted.weakness === "physical") {
            targeted.damage(weaknessDamage);
            targeted.down = true;


        } else {
            targeted.damage(defaultDamage);


        }
        enemyAtk();
    }
}

function fireAtk() {
    if (targeted) {
        if (targeted.weakness === "fire") {
            targeted.damage(weaknessDamage);
            targeted.down = true;

        } else {
            targeted.damage(defaultDamage);

        }
        enemyAtk();
    }
}

function iceAtk() {
    if (targeted) {
        if (targeted.weakness === "ice") {
            targeted.damage(weaknessDamage);
            targeted.down = true;

        } else {
            targeted.damage(defaultDamage);

        }
        enemyAtk();
    }
}


//generating the enemy objects 
var enemy1 = new Enemy("physical", "fire", "ice");
var enemy2 = new Enemy("ice", "fire", "physical");
var enemy3 = new Enemy("fire", "physical", "ice");

//holds the enemy that is currently targeted
var targeted = "";

//holds player HP
var playerHP = 100;

//damage Values
var defaultDamage = 10;
var weaknessDamage = 20;
var enemyDamage = 10;

//click handlers for each of the attacks
$("#physical").on("click", physicalAtk);
$("#fire").on("click", fireAtk);
$("#ice").on("click", iceAtk);

//click handler for the enemy, sets the target to attack
$(".enemy").on("click", function() {
    targeted = $(this).attr("id");
    console.log(targeted);
    $(".enemy").css("background-color", "white");
    $(this).css("background-color", "red");
    if (targeted === "enemy1") {
        targeted = enemy1;
    } else if (targeted === "enemy2") {
        targeted = enemy2;
    } else if (targeted === "enemy3") {
        targeted = enemy3;
    }
});