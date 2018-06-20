






//Defining the Angels(enemies)

function Angel(name,hitpoints,normalattack,criticalattack)
   this.name = name;
   this.hitpoints = hitpoints;
   this.attackpoints = attackpoints;
   this.defensepoints = defensepoints;
   this.attack = function () {
//work in the attack function
   }
   this.defend = function () {
//work in the defend function
   }
   this.critical = function () {
//work in the critical function
   }
this.status = function () {
    if (lifepoints < 0) {
        console.log("Enemy Defeated");
    } 
}

//Object Ramiel
var ramiel = new Angel("Ramiel", 30, 8, Math.floor((Math.random() * 10) + 1) )

//Declaring the Evangelion Units(character's to select) 

function EVA(name,lifepoints,normalattack,criticalattack)
  this.name = name;
  this.hitpoints = hitpoints;
  this.normalattack = normalattack;
  this.criticalattack = criticalattack;
  this.attack = function () {
  ramiel.hitpoints - EVA.normalattack;  
  }

  this.defend = function () {
  }
  this.critical = function () {
//work in the critical function
  }
  this.status = function () {
      if (lifepoints < 0) {
      console.log("Game Over");
      }
  }

//Object Unit01
var unit01 = new EVA("Unit01", 40, 5, Math.floor((Math.random() * 10) + 1))


//Animating Angel 

//Appears, its Alive
$(document).ready(function(){
    $(".btn1").click(function(){
        $("p").fadeIn()
    });

//Defeated
$(".btn2").click(function(){
    $("p").fadeOut(); //check this out https://api.jquery.com/fadeOut/
});
});

//Attacks




