//Every symbol value returned from Symbol() is unique

const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl);

//a set contains unique value and it doesnot contains the unique value.
//const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
//console.log(games);



const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
games.add('Banjo-Tooie');
games.add('Age of Empires');
console.log(games);
games.delete('Super Mario Bros.');
console.log(games);
//if we want to delete all data from sets then use below method.
//games.clear()
//console.log(games);

//to get the length of sets, use size function.
const days = new Set(['sunday','monday','tuesday','wednesday','thursday','friday','saturday']);
console.log(days.size);
//Checking If An Item Exists
//Use the .has() method to check if an item exists in a Set. If the item is in the Set,
//then .has() will return true. If the item doesn’t exist in the Set, then .has() will return false.
console.log(days.has('thursday'));
console.log(days.has('january'));
//Retrieving All Values
//Finally, use the .values() method to return the values in a Set.
// The return value of the .values() method is a SetIterator object.
//console.log(days.values());
//same result from keys()
//console.log(days.keys());

const iterator = days.values();

console.log(iterator.next());

let myFavoriteFlavors = new Set();
myFavoriteFlavors.add("chocolate chip");
myFavoriteFlavors.add("cookies and cream");
myFavoriteFlavors.add("strawberry");
myFavoriteFlavors.add("vanilla");
myFavoriteFlavors.delete("strawberry");
console.log(myFavoriteFlavors);


//Weak set example
//it contains only object
const student1 = { name: 'James', age: 26, gender: 'male' };
const student2 = { name: 'Julia', age: 27, gender: 'female' };
const student3 = { name: 'Richard', age: 31, gender: 'male' };
//weakset is not iterator function.so always use square bracket in weakset
const roster = new WeakSet([student1, student2, student3]);
console.log(roster);
//let roster = new WeakSet([student1,student2,student3]);
//essentially it deletes the object of student3.
student3 = null;
console.log(roster);
//if we add something other than object then it wil throw message.
//roster.add("shalu");
//console.log(roster);
