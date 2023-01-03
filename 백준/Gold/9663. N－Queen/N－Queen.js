const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let n = +fs.readFileSync(filePath).toString().replace(/\r/g, '').trim();
let chess = Array.from(new Array(n), () => new Array(n).fill(0));
let isValidCoord = (y, x) => y >= 0 && y < n && x >= 0 && x < n;
let cnt = 0;

let func = k => {
    if (k === n) {
        cnt++;
        return;
    }
    for (let i = 0; i < n; i++) {
        if (chess[k][i] === 0) {
            // chess[k][i]++;

            // 체스판 비활성화
            // 왼쪽 대각선
            for (let y = k + 1, x = i - 1; isValidCoord(y, x); y++, x--) {
                chess[y][x]++;
            }
            // 오른쪽 대각선
            for (let y = k + 1, x = i + 1; isValidCoord(y, x); y++, x++) {
                chess[y][x]++;
            }
            // 아래 직선
            for (let y = k + 1, x = i; isValidCoord(y, x); y++) {
                chess[y][x]++;
            }

            func(k + 1)
            // 체스판 활성화
            // 왼쪽 대각선
            for (let y = k + 1, x = i - 1; isValidCoord(y, x); y++, x--) {
                chess[y][x]--;
            }
            // 오른쪽 대각선
            for (let y = k + 1, x = i + 1; isValidCoord(y, x); y++, x++) {
                chess[y][x]--;
            }
            // 아래 직선
            for (let y = k + 1, x = i; isValidCoord(y, x); y++) {
                chess[y][x]--;
            }
        }
    }
}

func(0);

console.log(cnt);