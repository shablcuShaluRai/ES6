const arr = [-1,11,5,30];
//Math.max works for an arbitrary number of an argument, but not for arrays
  console.log(Math.max(arr));  //Nan
// The apply() method calls a function with a given this value, and arguments provided as an array.
console.log(Math.max.apply(Math, arr));
console.log(Math.max(...arr)); // 30\
