const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inp = fs
    .readFileSync(filePath)
    .toString()
    .replace(/\r/g, "")
    .trim()
    .split("\n");

let [m, n] = inp[0].split(" ").map(Number);
inp = inp.splice(1).map((row) => row.split(" "));
let dy = [0, 1, 0, -1];
let dx = [1, 0, -1, 0];
let dist = Array.from({ length: n }, () => new Array(m).fill(0));
let q = [];
let idx = 0;
let maxDist = -1;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (inp[i][j] === "1") {
            q.push([i, j]);
        }
        if (inp[i][j] === "0") {
            dist[i][j] = -1;
        }
    }
}

while (q.length > idx) {
    const [y, x] = q[idx];
    idx++;
    for (let j = 0; j < 4; j++) {
        let ny = y + dy[j];
        let nx = x + dx[j];
        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
        if (dist[ny][nx] >= 0) continue;

        inp[ny][nx] = "1";
        dist[ny][nx] = dist[y][x] + 1;
        q.push([ny, nx]);
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (dist[i][j] === -1) {
            console.log(-1);
            return;
        }
        maxDist = Math.max(maxDist, dist[i][j]);
    }
}

console.log(maxDist);
