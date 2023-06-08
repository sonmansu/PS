const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inp = fs
    .readFileSync(filePath)
    .toString()
    .replace(/\r/g, "")
    .trim()
    .split("\n");

let cnt = 0;
let maxSize = 0;
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
const [n, m] = inp[0].split(" ").map(Number);
const chk = Array.from({ length: n }, () => new Array(m).fill(0));
const arr = [];
const q = [];

for (let i = 0; i < n; i++) {
    arr[i] = inp[i + 1].split(" ");
}

const isValidCoord = (y, x) => y >= 0 && y < n && x >= 0 && x < m;

const bfs = () => {
    let size = 1;
    while (q.length !== 0) {
        const [y, x] = q.pop();
        for (let i = 0; i < 4; i++) {
            let ny = y + dy[i];
            let nx = x + dx[i];
            if (!isValidCoord(ny, nx) || arr[ny][nx] === "0" || chk[ny][nx])
                continue;
            size++;
            q.push([ny, nx]);
            chk[ny][nx] = 1;
        }
    }
    return size;
};

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (arr[i][j] === "1" && !chk[i][j]) {
            cnt += 1;
            chk[i][j] = 1;
            q.push([i, j]);
            let size = bfs();
            maxSize = Math.max(size, maxSize);
        }
    }
}

console.log(cnt);
console.log(maxSize);
