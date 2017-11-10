// const arr =  [];
// for (var i = 0 ;i < 3; i++){
//   arr.push(() => console.log(i));
//   //console.log(arr.push(() => i));
// }
// const data = arr.map(x => x());
// //console.log(data);

const arr = [];
for(var i = 0 ; i<3; i++){
  arr.push(() => i)
}
const data = arr.map(x => console.log(x))
console.log(data);


const HTML5_SKELETON = `
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    </body>
    </html>`;

console.log(HTML5_SKELETON);


const arr1 = ['a', 'b', 'c'];
for (const elem of arr1) {
    console.log(elem);
}
