const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, arr] = fs.readFileSync(filePath).toString().replace(/\r/g, '').trim().split('\n');
arr = arr.split(' ').map(Number);

let set = new Set(arr);
let unique = [...set];
unique.sort((a, b) => a - b);

let map = new Map();
unique.forEach((val, idx) => map.set(val, idx));

let res = [];
arr.forEach(val => res.push(map.get(val)));

console.log(res.join(' '));

