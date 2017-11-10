//
// function findNextSquare(sqr){
//   let d = Math.sqrt(sqr);
//    let val = Math.pow(d+1, 2)
//    let n = Math.trunc(Math.sqrt(val))
//     let res =  n == d+1 ? val : -1
//    return res
//
// }
// console.log(findNextSquare(342786627));

// function findNextSquare(sq) {
//   var root = Math.sqrt(sq);
//   console.log(root);
//   return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
// }
// console.log(findNextSquare(121));

// function findNextSquare(sq) {
//   // Return the next square if sq if a perfect square, -1 otherwise
//   var root = Math.sqrt(sq);
//   if (Number.isInteger(root)) {
//     return Math.pow(root + 1, 2);
//   } else {
//     return -1;
//   }
// }

// Es6

let findNextSquare = sq => {
  let root  = Math.sqrt(sq)
  return root % 1 === 0 ? Math.pow(root+1, 2) : -1
}
console.log(findNextSquare(121));
