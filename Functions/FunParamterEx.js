
function greet(name, greeting) {
  name = (typeof name !== 'undefined') ?  name : 'Student';
  greeting = (typeof greeting !== 'undefined') ?  greeting : 'Welcome';

  return `${greeting} ${name}!`;
}

console.log(greet()); //welcome student!
console.log(greet('shalu'));//welcome shalu!
console.log(greet('shalu','Anoop'))// Anoop shalu!


//default function parameters in ES6.
function greet(name='student',greeting='welcome'){
return `${greeting} ${name}`;
}
console.log(greet());
console.log(greet('shalu'));
console.log(greet('shalu','anoop'));


//default and destructering element example
function createGrid([width = 5, height = 5] = []) {
  return `generate a ${width} * ${height}`;

}
console.log(createGrid());//it gives the default value
/*console.log(createGrid(2));//throw an error
console.log(createGrid(3,8));
console.log(createGrid(undefined,3));
console.log(createGrid(3,undefined));
*/


function createSundae({scoops = 1, toppings = ['Hot Fudge']}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

console.log(createSundae({})); // Your sundae has 1 scoop with Hot Fudge toppings.
console.log(createSundae({scoops: 2})); // Your sundae has 2 scoops with Hot Fudge toppings.
console.log(createSundae({scoops: 2, toppings: ['Sprinkles']})); // Your sundae has 2 scoops with Sprinkles toppings.
console.log(createSundae({toppings: ['Cookie Dough']})); // Your sundae has 1 scoop with Cookie Dough toppings.

//By adding an empty object as the default parameter in case no arguments are provided,
// calling the function without any arguments now works.

function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}
console.log(createSundae());


//every possiblity to call the function  works here.
function houseDescriptor({houseColor = 'green', shutterColors = ['red']} = {}) {
  return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
}
console.log(houseDescriptor({houseColor:'red', shutterColors:['white','gray','pink']}));
console.log(houseDescriptor({houseColor:'red'}));
console.log(houseDescriptor());
console.log(houseDescriptor({shutterColors:['orange','blue']}));
console.log(houseDescriptor({}));
