const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inp = fs.readFileSync(filePath).toString().split("\n");
const n = Number(inp.shift());
const area = []; // inp.map(el => el.split(' ').map(Number));
let maxHeight = 1;
let height;
inp.forEach(el => {
    area.push(el.split(' ').map(Number));
    if (Math.max(...area[area.length - 1]) > maxHeight) 
        maxHeight = Math.max(...area[area.length - 1]); 
})
let chk;
let cnt = 0;
let maxCnt = 0;
let dy = [-1, 0, 1, 0];
let dx = [0, 1, 0, -1];


const isValidCoord = (y, x) => 0 <= y && y < n && 0 <= x && x < n;

function dfs(y, x) {
    chk[y][x] = 1;
    for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];
        if (isValidCoord(ny, nx) && area[ny][nx] >= height && !chk[ny][nx]) {
            dfs(ny, nx);
        }
    }
}

function findMaxHeight() {
    for (height = 0; height < 100; height++) {
        chk = Array.from(Array(n), () => Array(n).fill(0));
        cnt = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (area[i][j] >= height && !chk[i][j]) {
                    cnt++;
                    dfs(i, j);
                }
            }
        }
        if (cnt > maxCnt) maxCnt = cnt;
    }
    return maxCnt;
}

console.log(findMaxHeight());
