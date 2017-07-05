//Destructuring borrows inspiration from languages like Perl and Python
//by allowing you to specify the elements you want to extract from an array or object on the left side of an assignment.

//let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];
//let [first, second, third,six] = positions;
//console.log(six);


//destructring value from  an object

const gemstone = {
  type: 'quartz',
  color: 'rose',
  karat: 21.29
};

const {type, color, karat} = gemstone;

console.log(type, color, karat);

/*const circle = {
  radius: 10,
  color: 'orange',
  getArea: function(radius) {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference: function() {
    return 2 * Math.PI * this.radius;
  }
};

let {radius,color,getArea, getCircumference} = circle;
console.log(getArea);
*/

//destructring of array elements
const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];
const[x, , ,y, , , , z]=things;
const one = x;
const two = y;
const three =z;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);

//object literal
/*let type = 'quartz';
let color='rose';
let carat=21.25;

let gemstone={ type , color , carat};
console.log(gemstone);
*/


const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

for (const [key ,value] of members) {
    console.log(key, value);

}


let obj = { first: 'Jane', last: 'Doe' };
let { first: f, last: l } = obj;
console.log(f,l);

// destructering of array using for of loop
//const map = new Map().set(false, 'no').set(true, 'yes');
const map = new Map();
map.set(1,'one');
map.set(2,'two');
for (const [key, value] of map) {
  console.log(`${key} ${value}`);
}
