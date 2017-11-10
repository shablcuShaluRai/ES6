// function descendingOrder(n){
//   // convert number into string and then converted into string of array
//   let data = n.toString().split('')
//   // sort the string, reverse the string and then join the string
//   let st = data.sort().reverse().join('')
//   // convert string into number
//    let result = parseInt(st)
//    return result
// }
// console.log(descendingOrder(2372843984));

// Es6
let descendingOrder = n => {
  return parseInt(String(n).split('').sort().reverse().join(''))
}
console.log(descendingOrder(287392832));
