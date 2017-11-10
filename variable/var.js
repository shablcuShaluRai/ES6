//   var x = 3;  // global variable
// function func(randomized){
//   if(randomized){
//     var x = Math.random()
//     return x;
//   }
//   return x;
// }
//
// //console.log(func(true));  // some random variable
// console.log(func(false));  // undefined

  // local variable
// function func(randomized){
//   var x = 3;   // var is function scoped.
//   if(randomized){
//     var x = Math.random()
//     return x;
//   }
//   return x;
// }
//
// console.log(func(true));  // some random variable
// console.log(func(false)); // 3


// using const variable
//  let x = 3 ;
// function func(randomized){
//   if(randomized){
//     let x = Math.random()
//     return x;
//   }
//   return x;
// }
//
// console.log(func(true));  // some random variable
// console.log(func(false)); // 3

// const is declaration of variable, but the variable you declare
//  must be immediately initialized, with a value that can’t be changed afterwards.
//const x = 3 ;
// function func(randomized){
//   const x ;  // if we doesnot initialized immmediately then it throws an error
//   //"SyntaxError: Missing initializer in const declaration"
//
//  if(randomized){
//    const x = Math.random()
//    return x;
//  }
//  return x;
// }
//
// console.log(func(true));  // some random variable
// console.log(func(false));

const bar = 23;
bar = 25; // if we assi
console.log(bar);

// let is block scoped, it only exists within the current block.
// function order(x, y){
//   if(x > y){
//     let temp = x,
//      x = y,
//      y = temp
//   }
//   console.log(temp === x);  // Refrence Error
//   return [x, y];
// }
// order(3,2);

function order(x, y){
  let temp
  if(x > y){
     temp = x,
     x = y,
     y = temp
  }
  console.log(temp === x);  // Refrence Error
  return [x, y];
}
order(3,2);
