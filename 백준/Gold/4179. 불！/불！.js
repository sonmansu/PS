const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inp = fs
    .readFileSync(filePath)
    .toString()
    .replace(/\r/g, "")
    .trim()
    .split("\n");

let [r, c] = inp[0].split(" ").map(Number);
inp = inp.slice(1);
let fireChk = Array.from({ length: r }, () => new Array(c).fill(-1)); // 접근 가능 지역
let jiChk = Array.from({ length: r }, () => new Array(c).fill(-1)); // 방문 안함
let dy = [-1, 0, 1, 0];
let dx = [0, 1, 0, -1];
let fireQ = [];
let jiQ = [];
let fqIdx = 0;
let jqIdx = 0;
for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
        switch (inp[i][j]) {
            case "F":
                fireQ.push([i, j]);
                fireChk[i][j] = 0; // 접근 불가능
                break;
            case "J":
                jiQ.push([i, j]);
                jiChk[i][j] = 0; // start point, 방문함
                break;
        }
    }
}

const isValidCoord = (y, x) => y >= 0 && y < r && x >= 0 && x < c;

const bfs = () => {
    while (fireQ.length > fqIdx) {
        let [y, x] = fireQ[fqIdx++];
        for (let i = 0; i < 4; i++) {
            let ny = y + dy[i];
            let nx = x + dx[i];
            if (
                !isValidCoord(ny, nx) ||
                fireChk[ny][nx] >= 0 ||
                inp[ny][nx] === "#"
            )
                continue;
            fireChk[ny][nx] = fireChk[y][x] + 1; //fire
            fireQ.push([ny, nx]);
        }
    }

    while (jiQ.length > jqIdx) {
        let [y, x] = jiQ[jqIdx++];
        for (let i = 0; i < 4; i++) {
            let ny = y + dy[i];
            let nx = x + dx[i];
            if (!isValidCoord(ny, nx)) {
                console.log(jiChk[y][x] + 1);
                return;
            }
            if (
                inp[ny][nx] === "#" ||
                jiChk[ny][nx] >= 0 ||
                (fireChk[ny][nx] !== -1 && fireChk[ny][nx] <= jiChk[y][x] + 1)
            )
                continue;
            jiChk[ny][nx] = jiChk[y][x] + 1;
            jiQ.push([ny, nx]);
        }
    }

    console.log("IMPOSSIBLE");
};

bfs();
