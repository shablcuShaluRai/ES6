/*function getEmployee() {
    console.log('the function has started');

    const names = ['Shalu','Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
    }

    console.log('the function has ended');
}


getEmployee();

*/

//t will be called one more time than there are yield expressions in the generator function.


function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        yield name;
    }

    console.log('the function has ended');
}
const generatorIterator = getEmployee();
let result = generatorIterator.next();
result.value // is "Amanda"
console.log(result.value);
generatorIterator.next().value // is "Diego"
generatorIterator.next().value // is "Farrin"
console.log(generatorIterator.next().value);
