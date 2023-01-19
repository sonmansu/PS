const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [inp, ...arr] = fs.readFileSync(filePath).toString().replace(/\r/g, '').trim().split('\n');

let [k, n] = inp.split(' ').map(Number); // 이미 갖고 있는 랜선 갯수k, 필요한 랜선 갯수n
arr = arr.map(Number);

function solve(length) {
    let cnt = 0;
    arr.forEach(val => {
        cnt += Math.floor(val / length)
    })
    return cnt;
}

// binary search
let st = 0;
let en = 2 ** 31 - 1;
while (st < en) {
    let mid = Math.floor((st + en + 1) / 2);
    if (solve(mid) >= n) st = mid;
    else en = mid - 1;
}

console.log(st);