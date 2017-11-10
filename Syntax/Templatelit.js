// const student = {
//   name: 'Richard Kalehoff',
//   guardian: 'Mr. Kalehoff'
// };
//
// const teacher = {
//   name: 'Mrs. Wilson',
//   room: 'N231'
// }
// /*//using string rule
// //let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to pick up your report card.';
// // using template literal rule.
// let message=`${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`
// console.log(message);
// */
// //multiline string
// /*  'Please excuse ' + student.name + '.\n' +
//   'He is recovering from the flu.\n\n' +
//   'Thank you,\n' + student.guardian;*/
//   //multiline template literal;
//   let note= `${teacher.name},
//     please excuse ${student.name}.
//     he is recovering from the flu.
//     Thank you ,
//     ${student.guardian}`
//
// console.log(note);



function name(fname, lname){
  console.log(`${fname} ${lname}`);
}
 // name("Shalu", "Rai")
//  name(5,6)
 name([1,23], [1,2])

 const firstName = 'Jane';
console.log(`Hello ${firstName}!
How are you
today?`);

// 1.line terminate in template literals
const str = `BEFORE
AFTER`;
console.log(str === 'BEFORE\nAFTER');

//2. line terminate in template literals

const str1 = `BEFORE
AFTER`;
console.log(str1 === `BEFORE
AFTER`);
