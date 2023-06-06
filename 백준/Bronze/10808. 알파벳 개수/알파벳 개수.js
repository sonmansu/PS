const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inp = fs
    .readFileSync(filePath)
    .toString()
    .replace(/\r/g, "")
    .trim()
    .split("");

const arr = Array.from({ length: 26 }, () => 0);

inp.forEach((alpha) => arr[alpha.charCodeAt(0) - 97]++);
console.log(arr.join(" "));