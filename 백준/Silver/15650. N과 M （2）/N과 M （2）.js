const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, m] = fs.readFileSync(filePath).toString().replace(/\r/g, '').trim().split(' ').map(Number);

let isUsed = new Array(n + 1).fill(0);
let arr = new Array(m);
let startNum = 1;

let func = (k) => {
    if (k === m) {
        console.log(arr.join(' '));
        return;
    }
    if (k === 0) {
        startNum = 1;
    } else {
        let needToFill = m - k;
        let available = n - arr[k - 1];
        if (available < needToFill) return;
        startNum = arr[k - 1] + 1;
    }
    for (let i = startNum; i <= n; i++) {
        if (!isUsed[i]) {
            arr[k] = i;
            isUsed[i] = 1;
            func(k + 1);
            isUsed[i] = 0;
        }
    }
}

func(0);