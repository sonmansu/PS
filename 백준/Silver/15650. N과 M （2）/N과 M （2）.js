const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, m] = fs.readFileSync(filePath).toString().replace(/\r/g, '').trim().split(' ').map(Number);

let isUsed = new Array(n + 1).fill(0);
let arr = new Array(m);
let startNum = 1;

let func = (cnt, usedNum) => {
    if (cnt === m) {
        console.log(arr.join(' '));
        return;
    }
    for (let i = usedNum + 1; i <= n; i++) {
        if (!isUsed[i]) {
            arr[cnt] = i;
            isUsed[i] = 1;
            func(cnt + 1, i);
            isUsed[i] = 0;
        }
    }
}

func(0, 0);