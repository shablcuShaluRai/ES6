function palindrome(str){
  let pd = str.split('').reverse().join('')
  console.log(pd);
  console.log(str);
let data = (str == pd) ? true : false
  return data;
}
console.log(palindrome('eye'));
console.log(palindrome("my age is 0, 0 si ega ym"));
