let names = ['shalu', 'sahil', 'Ayush', "uma", 'diwakar', "kamaldhari", "suryabanshi"];

function likes(names){
  let len = names.length
  let msg = len == 0
            ? 'no one likes this'
            : len == 1
            ? `${names[0]} likes this`
            : len == 2
            ? `${names[0]} and ${names[1]} likes this `
            : len == 3
            ?  `${names[0]}, ${names[1]} and ${names[2]} likes this `
            : len == 4
            ?  `${names[0]}, ${names[1]} and 2 others like this `
            : `${names[0]}, ${names[1]} and ${len-2} others like this `
  return msg
}

console.log(likes(names)
);
