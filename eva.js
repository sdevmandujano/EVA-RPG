






//Defining the Angels(enemies)

function Angel(name,lifepoints,normalattack,criticalattack)
   this.name = name;
   this.lifepoints;
   this.attackpoints;
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
var ramiel = new Angel("Ramiel", 30, 8, Math.floor((Math.random() * 10) + 1) )

//Declaring the Evangelion Units(character's to select) 

function EVA(name,lifepoints,normalattack,criticalattack)
  this.name = name;
  this.lifepoints = lifepoints;
  this.normalattack = normalttack;
  this.criticalattack = criticalattack;
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
      console.log("Game Over");
      }
  }

var unit01 = new EVA("Unit01", 40, 5, Math.floor((Math.random() * 10) + 1))


