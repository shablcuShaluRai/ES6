
// function factorialized(num){
//   return num==0 ? 1 : (num * factorialized(num-1));
// }
// console.log(factorialized(5));


let factorialized = num => num == 0 ? 1 : num*factorialized(num-1)
console.log(factorialized(5));
