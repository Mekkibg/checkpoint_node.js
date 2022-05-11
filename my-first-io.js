const fs=require('fs')

let file = process.argv[2];
let data = fs.readFileSync(file);
console.log(data.toString().split("\n").length-1)
