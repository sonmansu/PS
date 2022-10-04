const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = Number(fs.readFileSync(filePath).toString());
let chess = Array.from(Array(n), () => new Array(n).fill(0));
let cnt = 0;

function func(k) {
    if (k === n) {
        cnt++;
        return;
    }
    let i;
    for (i = 0; i < n; i++) {
        if (chess[k][i] === 0) {
            chess[k][i] = -1; // put queen
            // 세로 비활성화
            for (let y = k + 1; y < n; y++) {
                chess[y][i]++;
            }
            // 대각선 비활성화 왼쪽
            for (let y = k + 1, x = i - 1; y < n && x >= 0; y++, x--) {
                chess[y][x]++;
            } // 오른쪽
            for (let y = k + 1, x = i + 1; y < n && x < n; y++, x++) {
                chess[y][x]++;
            }

            func(k + 1);
            // 비활성 해제
            chess[k][i] = 0;
            for (let y = k + 1; y < n; y++) {
                chess[y][i] = !chess[y][i] ? 0 : chess[y][i] - 1;
            }
            // 대각선 비활성화
            for (let y = k + 1, x = i - 1; y < n && x >= 0; y++, x--) {
                chess[y][x] = !chess[y][x] ? 0 : chess[y][x] - 1;
            }
            for (let y = k + 1, x = i + 1; y < n && x < n; y++, x++) {
                chess[y][x] = !chess[y][x] ? 0 : chess[y][x] - 1;
            }
        }
    }

}

func(0);
console.log(cnt);