const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, k] = fs.readFileSync(filePath).toString().split(" ").map(Number);
let chk = new Array(100001).fill(0);

function bfs() {
    let queue = [[k, 0]];
    while (queue.length > 0) {
        let [num, cnt] = queue.shift();
        if (num - 1 === n || num + 1 === n || num / 2 === n) {
            console.log(cnt + 1);
            return;
        }
        if (!chk[num - 1]) {
            queue.push([num - 1, cnt + 1]);
            chk[num - 1] = 1;
        }
        if (!chk[num + 1]) {
            queue.push([num + 1, cnt + 1]);
            chk[num + 1] = 1;
        }
        if (!chk[num / 2] && num % 2 === 0) {
            queue.push([num / 2, cnt + 1]);
            chk[num / 2] = 1;
        }
    }
}

if (n === k) 
    console.log(0);
else 
    bfs();