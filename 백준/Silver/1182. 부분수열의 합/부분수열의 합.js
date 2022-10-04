const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, s] = input.shift().split(' ').map(Number);
let nums = input.shift().split(' ').map(Number);
let cnt = 0;

function func(cur, tot) {
    if (cur === n) {
        if (tot === s) cnt++;
        return;
    }
    func(cur + 1, tot);
    func(cur + 1, tot + nums[cur])
}
func(0, 0);
if (s === 0) cnt--;
console.log(cnt);