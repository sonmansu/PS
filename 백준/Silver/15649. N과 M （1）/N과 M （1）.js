const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, m] = fs.readFileSync(filePath).toString().split(" ").map(Number);

let arr = new Array(m);
let isUsed = new Array(n + 1).fill(false);

function func(k) {
    if (k === m) {
        console.log(arr.join(' '));
        return;
    }
    for (let i = 1; i <= n; i++) {
        if (!isUsed[i]) {
            arr[k] = i;
            isUsed[i] = true;
            func(k + 1);
            isUsed[i] = false;
        }
    }
}

func(0);

