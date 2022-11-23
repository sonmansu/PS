const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inp = +fs.readFileSync(filePath).toString();

let arr = Array.from({ length: inp }, (item, idx) => idx + 1);
let i = 0;

while (i < arr.length - 1) {
    arr[i++] = -1;
    arr.push(arr[i]);
    arr[i++] = -1;
}

console.log(arr.at(-1));