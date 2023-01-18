const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, ...arr] = fs.readFileSync(filePath).toString().replace(/\r/g, '').trim().split('\n').map(Number);

arr.sort((a, b) => a - b);

let sums = [];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        sums.push(arr[i] + arr[j]);
    }
}
sums.sort((a, b) => a - b);

let binarySearch = target => {
    let st = 0;
    let en = sums.length - 1;
    while (st <= en) {
        let mid = Math.floor((st + en) / 2);
        if (target < sums[mid]) {
            en = mid - 1;
        } else if (target > sums[mid]) {
            st = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

let res = [];

for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        let find = binarySearch(arr[i] - arr[j]);
        if (find >= 0)
            res.push(arr[i]);
    }
}

console.log(Math.max(...res));