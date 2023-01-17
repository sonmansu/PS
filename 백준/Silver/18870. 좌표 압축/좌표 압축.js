const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, arr] = fs.readFileSync(filePath).toString().replace(/\r/g, '').trim().split('\n');
arr = arr.split(' ').map(Number);
let set = new Set(arr);
let unique = [...set];
let map = new Map();
let res = [];

unique.sort((a, b) => a - b);
unique.forEach((val, idx) => map.set(val, idx));
arr.forEach(val => res.push(map.get(val)));

console.log(res.join(' '));

