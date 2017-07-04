//define class in escma2015

/*function plane(numEngines){
  this.numEngines=numEngines;
  this.enginesActive=false;
}
plane.prototype.startEngines = function () {
  console.log("starting engines");
  this.enginesActive=true;
};

var shaluplane=new plane(1);
shaluplane.startEngines();

var jamesplane= new plane(4);
jamesplane.startEngines();

*/

//define class in ES6

class Plane{
  constructer(numEngines){
    this.numEngines=numEngines;
    this.enginesActive=false;
  }
  startEngines(){
    console.log("start engines");
    this.enginesActive=true;
  }
}

var shaluplane =new Plane(1);
shaluplane.startEngines();

var jamesplane =new Plane(4);
jamesplane.startEngines();
console.log(typeof Plane);//return function

/*

class Tree {
  constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
    this.size = size;
    this.leaves = leaves;
    this.leafColor = null;
  }

  changeSeason(season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
      this.size += 1;
    }
  }
}

class Maple extends Tree {
  constructor(syrupQty = 15, size, barkColor, leaves) {
    super(size, barkColor, leaves);
    this.syrupQty = syrupQty;
  }

  changeSeason(season) {
    super.changeSeason(season);
    if (season === 'spring') {
      this.syrupQty += 1;
    }
  }

  gatherSyrup() {
    this.syrupQty -= 3;
  }
}

const myMaple = new Maple(15, 5);
console.log(myMaple);
myMaple.changeSeason('fall');
console.log(myMaple);
myMaple.gatherSyrup();
console.log(myMaple);
myMaple.changeSeason('spring')
console.log(myMaple);

*/
class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
	}
}
class Bicycle extends Vehicle{
    constructor(color = 'blue', wheels = 2, horn = 'honk honk') {
    super(color,wheels,horn);
}
}

const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk
