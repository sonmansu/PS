const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, k] = fs.readFileSync(filePath).toString().split(' ').map(Number);

let arr = new Array(n);
for (let i = 0; i < n; i++) {
    arr[i] = i + 1
}
let idx = k - 1;
let ans = []

while (arr.length !== 0) {
    ans.push(arr[idx]);
    arr.splice(idx, 1);
    idx = (idx + k - 1) % (arr.length);
}

console.log('<' + ans.join(', ') + '>');