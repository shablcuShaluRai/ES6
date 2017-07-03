const student = {
  name: 'Richard Kalehoff',
  guardian: 'Mr. Kalehoff'
};

const teacher = {
  name: 'Mrs. Wilson',
  room: 'N231'
}
/*//using string rule
//let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to pick up your report card.';
// using template literal rule.
let message=`${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`
console.log(message);
*/
//multiline string
/*  'Please excuse ' + student.name + '.\n' +
  'He is recovering from the flu.\n\n' +
  'Thank you,\n' + student.guardian;*/
  //multiline template literal;
  let note= `${teacher.name},
    please excuse ${student.name}.
    he is recovering from the flu.
    Thank you ,
    ${student.guardian}`

console.log(note);
