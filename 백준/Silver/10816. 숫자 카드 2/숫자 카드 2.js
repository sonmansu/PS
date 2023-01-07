const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let inp = fs.readFileSync(filePath).toString().replace(/\r/g, '').trim().split('\n');

let arr = inp[1].split(' ').map(Number);
let card = inp[3].split(' ').map(Number);
let map = new Map();
arr.forEach(el => {
    map.set(el, map.get(el) + 1 || 1);
})

arr.sort((a, b) => a - b);
let res = card.map(el => map.get(el) ?? 0)
console.log(res.join(' '));