const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let inp = fs.readFileSync(filePath).toString().split('\n');
// console.log(inp);

// let obj = {};

let map = new Map();

for (let i = 1; i <= +inp[0]; i++) {
    map.set(inp[i], map.get(inp[i]) + 1 || 1);
    // obj[inp[i]] = obj[inp[i]] + 1 || 1;
}

// let sortKey =
let result = new Map(([...map].sort()).sort((a, b) => {
    // console.log('a[0], a[1] :>> ', a[0], a[1]);
    // if (a[1] === b[1]) {
    //     if ()   
    // }
    //     return b[0] - a[0];
    return b[1] - a[1];
    // return b[0] - a[0];
}))

// let result2 = new Map([...result].sort())


// console.log('result :>> ', result);
console.log(result.keys().next().value)

// console.log(obj)