
//map are similar to object because it contains the key and values as same as property.
// create a map.
const mapex= new Map();
console.log(mapex);//returns map object.


const employees = new Map();
//The .set() method takes two arguments.set(key,{value})
// The first argument is the key, which is used to reference the second argument, the value.
employees.set('shaluraics22@gmail.com', {
    firstName: 'Shalu',
    lastName: 'Rai',
    role: 'web Developer'
});
employees.set('optimistanoop@gmail.com', {
    firstName: 'Anoop',
    lastName: 'Rai',
    role: 'Web Developer'
});
employees.set('anupamrai@gmail.com', {
    firstName: 'Anupam',
    lastName: 'Rai',
    role: 'web Developer'
});
//employees.delete('anupamrai@gmail.com');

console.log(employees);

//Again, similar to Sets, you can use the .clear() method to remove all key-value pairs from the Map.

//employees.clear()
//console.log(employees);


//.has() used to check if key-value pair exist in map by using pass the value of key.

 const fruits = new Map();
 fruits.set('bn','banana');
 fruits.set('ap','apple');
 fruits.set('li','litchi');
 fruits.set('or','orange');

 console.log(fruits.has('bn'));
 console.log(fruits.has('pmn'));
 //we can also Retrieve  the value from map by passing key in .get() .
 console.log(fruits.get('bn'));


//using mapIterator
let iteratorObjForKeys = fruits.keys();
iteratorObjForKeys.next();
iteratorObjForKeys.next();
iteratorObjForKeys.next();
iteratorObjForKeys.next();
console.log(iteratorObjForKeys.next()); //returns object

//using for of loop

for(fruit of fruits){
  console.log( fruit);  //returns object

}
//using for each loop
fruits.forEach((key,value)=> console.log(key,value));
fruits.forEach((value, key) => console.log(value, key));

const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);
