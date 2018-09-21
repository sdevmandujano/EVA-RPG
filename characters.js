
//Declaring the Evangelion Units(character's to select) 

function EVA(name,hitpoints,normalattack,criticalattack) {
  this.name = name;
  this.hitpoints = hitpoints;
  this.normalattack = normalattack;
  this.criticalattack = criticalattack;

}

EVA.prototype.species = "EVA";

EVA.prototype.attack = function (angel) {
	console.log(angel)
  angel.hitpoints = angel.hitpoints - this.normalattack;
  return;
  
}

EVA.prototype.defend = function () {
 
  this.hitpoints = Angel.attackpoints - this.hitpoints;

  }
EVA.prototype.critical = function () {
//work in the critical function
  }
  this.status = function () {
      if (this.hitpoints < 0) {
      console.log("Game Over");
      }
  }

//Object Unit01
var unit01 = new EVA("Unit01", 200, 10, Math.floor((Math.random() * 10) + 1))

function someFunction(){
	// alert("Evangelion attacked the Angel");
	unit01.attack(ramiel);

	if(ramiel.hitpoints <= 0) {
        alert("Target Defeated!!");
        $(".prueba").fadeOut( "slow" );
        $("#ram").fadeOut( "slow" );
      
       console.log("works");
	} else {
		alert("It still alive");
	}
};

//Defining the Angels(enemies)

function Angel(name,hitpoints,attackpoints,defensepoints) {
    this.name = name;
    this.hitpoints = hitpoints;
    this.attackpoints = attackpoints;
    this.defensepoints = defensepoints;
 }
 
 Angel.prototype.species = "Angel";
 
 Angel.prototype.attack = function (eva) {
     
        console.log(eva)
      eva.hitpoints = eva.hitpoints - this.normalattack;
      return;
      
    }



 
 
 Angel.prototype.defend = function () {
     //this is the body of the defend function
 }
 
 
 Angel.prototype.critical = function () {
     //this is the body of the critical function
 }
 

 
 //Object Ramiel
 var ramiel = new Angel("Ramiel", 20, 8, Math.floor((Math.random() * 10) + 1) );
 
 function anotherFunction(){
       
	ramiel.attack(unit01);

    $("#ram").attr("src","ramiel.gif");
     
};


 
 //Future Angels(enemies) will be placed below















    
   



var health = 100;

var health2 = 100;

function attackHealth() {
    health = health - 50;
    document.getElementById("healthId").setAttribute("style", "width:" + health + "%");
  }

  function attackEvaHealth() {
    health = health2 - 30;
    document.getElementById("healthId2").setAttribute("style", "width:" + health + "%");
  }

