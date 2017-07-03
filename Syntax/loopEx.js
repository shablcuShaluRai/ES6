//for loop iteration
/*const digits=[1,2,3,4,5,6,7,8,9];
for(let i=0;i<digits.length;i++){
  console.log(digits[i]);
}*/


// for in loop
/*const digits=[1,2,3,4,5,6,7,8,9];
for(let index in digits){
  console.log(digits[index]);
}
*/
/*
const digits=[1,2,3,4,5,6,7,8,9];
for ( let i  of digits){
  console.log(i);
}*/

//To print capitalize the first letter of each days
/*const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];


 function capitalizeTxt(day) {
  return day.charAt(0).toUpperCase() + day.slice(1);
}
 for(let day of days){
    console.log(capitalizeTxt(day));
 }
*/
 /*const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits,...vegetables];

console.log(produce);
*/
function sum(...nums) {
  let total = 0;
  for(const num of nums) {
    total += num;
  }
  return total;
}
console.log(sum(10,20,30,40,50,60,70,80,90));
