const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let inp = fs.readFileSync(filePath).toString().replace(/\r/g, '').trim().split('\n');

let n = +inp[0];
let a = inp[1].split(' ').map(Number);
a.sort((a, b) => a - b);
let m = inp[3].split(' ').map(Number);

let binarySearch = (target) => {
    let st = 0;
    let en = n - 1;
    let mid;
    while (st <= en) {
        mid = Math.floor((st + en) / 2);
        if (target < a[mid]) {
            en = mid - 1;
        } else if (target > a[mid]) {
            st = mid + 1;
        } else if (target === a[mid]) {
            return 1;
        }
    }
    return 0;
}
let res = [];
m.forEach(num => {
    res.push(binarySearch(num));
})

console.log(res.join('\n'));