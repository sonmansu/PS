const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, ...candy] = fs.readFileSync(filePath).toString().replace(/\r/g, '').trim().split('\n');
n = Number(n);
candy = candy.map(el => el.split(''));

// console.log('n, candy :>> ', n, candy);

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

function isValidCoord(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

function getMaxCandy(x, y) {
    // 1. row 
    let rowMaxCnt = 0, curCnt = 1;
    let prevCan = candy[y][0];
    let curCan;
    for (let i = 1; i < n; i++) {
        curCan = candy[y][i];
        if (curCan === prevCan) {
            curCnt++;
            rowMaxCnt = Math.max(rowMaxCnt, curCnt);
        } else {
            curCnt = 1;
        }
        prevCan = curCan;
    }
    // 2. col
    let colMaxCnt = 0;
    curCnt = 1;
    prevCan = candy[0][x];
    for (let i = 1; i < n; i++) {
        curCan = candy[i][x];
        if (curCan === prevCan) {
            curCnt++;
            colMaxCnt = Math.max(colMaxCnt, curCnt);
        } else {
            curCnt = 1;
        }
        prevCan = curCan;
    }

    return Math.max(colMaxCnt, rowMaxCnt);
}

let res = [];
for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
        let res2 = [];
        for (let i = 0; i < n; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (isValidCoord(nx, ny)) {
                // swap
                [candy[y][x], candy[ny][nx]] = [candy[ny][nx], candy[y][x]];
                let maxCan = getMaxCandy(x, y);
                res2.push(maxCan);
                if (maxCan === n) {
                    console.log(n);
                    return;
                }
                // roll back
                [candy[y][x], candy[ny][nx]] = [candy[ny][nx], candy[y][x]];
                // console.log('res2 :>> ', y, x, res2);
            }
        }
        res.push(Math.max(...res2));
    }
}
// console.log('res :>> ', res);
// console.log('Math.max(res) :>> ', Math.max(...res));
console.log(Math.max(...res));