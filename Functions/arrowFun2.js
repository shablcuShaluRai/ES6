// Expression bodies
let even = [2,4,6,8,10];
let odd = even.map(v => v+1)
console.log(odd);
let pairs = even.map(v => ({ even: v, odd: v+1}))
console.log(pairs);
let nums = even.map((v,i) => v+i)
console.log(nums);

// Statement bodies
nums.forEach(v => {
   if (v % 2 === 0)
       nums.push(v)
})
console.log(nums);
