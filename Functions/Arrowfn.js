//without arrow function
const uppersizednames = ['shalu','anoop','anupam','ayush'].map(function(name){return name.toUpperCase()});
console.log(uppersizednames);
//rule for converting the function to normal function
//1.remove the function keyword.
//2.remove the paranthesis.
//3.remove the  return keyword.
//4.remove the opening and closing braces
//5. add on the arrow => between the parameter list and function body


//This format of the function body is called the "concise body syntax". The concise syntax:

//has no curly braces surrounding the function body
//and automatically returns the expression.
const uppersizedname=['shalu','anoop','anupam','ayush'].map(name=>name.toUpperCase());
console.log(uppersizedname);

// let greet= function(name){return "hello "+name;}// without using arrow function.
//using arrow function and template literals.
const greet=name => `hello ${name}`;

console.log(greet('shalu'));

// empty parameter list requires parentheses
const sayHi = () => console.log('Hello ES6 !');
sayHi();


// multiple parameters requires parentheses
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');
//If you need more than just a single line of code in your arrow function's body, then you can use the "block body syntax".


const upperizedNamess = ['Shalu', 'Anup', 'Anupam','Anu','Navee','Ayush'].map( name => {
  name = name.toUpperCase();
  return `${name} has ${name.length} characters in their name`;
});
console.log(upperizedNamess);

const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(square =>  square * square);

console.log(...squares);

//const f = x => (x % 2) === 0 ? x : 0;
// const f = x => ((x % 2) === 0 ? x : 0);
// const f = (x => (x % 2)) === 0 ? x : 0;
// console.log(5);
//
// const f = (x => ((x % 2) === 0)) ? x : 0;
// console.log(typeof f);

// var matchObj =
//     /^(\d\d\d\d)-(\d\d)-(\d\d)$/
//     .exec('2999-12-31');
// var year = matchObj[1];
// var month = matchObj[2];
// var day = matchObj[3];
// console.log(matchObj);

// const [, year, month, day] =
//     /^(\d\d\d\d)-(\d\d)-(\d\d)$/
//     .exec('2999-12-31');
//     console.log([, year, month, day]);
//
//
//     const add = (x,y) =>  x+y
//     const plus1 = add.bind(undefined, 1);
//   //  const plus1 = y => add(1, y);
//     console.log(plus1(5));

let arr = ['a', 'b', 'c'];
arr.forEach(elm  =>  console.log(elm))
