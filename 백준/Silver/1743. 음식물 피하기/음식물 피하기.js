const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m, k] = input[0].split(' ').map(Number);
let aisle = Array.from(Array(n + 2), () => Array(m + 2).fill(0));
let visited = Array.from(Array(n + 2), () => Array(m + 2).fill(0));

for (let i = 1; i <= k; i++) {
    const [y, x] = input[i].split(' ').map(Number);
    aisle[y][x] = 1;
}


const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

let cnt, cntMax = 1;

function dfs(y, x) {
    for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];
        if (!visited[ny][nx] && aisle[ny][nx]) {
            visited[ny][nx] = 1;
            cnt++;
            dfs(ny, nx);
        }
    }
}


for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
        if (!visited[i][j] && aisle[i][j]) {
            cnt = 1;
            visited[i][j] = 1;
            dfs(i, j);
            cntMax = cnt > cntMax ? cnt : cntMax;
        }
    }
}

console.log(cntMax);