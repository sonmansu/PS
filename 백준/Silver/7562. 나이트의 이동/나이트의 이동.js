const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, ...inp] = fs.readFileSync(filePath).toString().replace(/\r/g, '').trim().split('\n');

let dy = [-2, -1, 1, 2, 2, 1, -1, -2];
let dx = [1, 2, 2, 1, -1, -2, -2, -1];
let res = [];

let isValidCoord = (y, x, l) => y >= 0 && y < l && x >= 0 && x < l;

for (let i = 0; i < inp.length; i += 3) {
    let [l, [y1, x1], [y2, x2]] = [+inp[i], inp[i + 1].split(' ').map(Number), inp[i + 2].split(' ').map(Number)];

    if (y1 === y2 && x1 === x2) {
        res.push(0);
        continue;
    }

    let chk = Array.from(new Array(l), () => new Array(l).fill(0));


    // bfs
    let q = [[y1, x1, 0]]; // put start coord
    chk[y1][x1] = 1; // visited


    outer: while (q.length != 0) {
        let [y, x, cnt] = q.shift();
        for (let j = 0; j < 8; j++) {
            let ny = y + dy[j];
            let nx = x + dx[j];
            if (isValidCoord(ny, nx, l) && !chk[ny][nx]) {
                if (ny === y2 && nx === x2) {
                    res.push(cnt + 1);
                    break outer;
                }
                q.push([ny, nx, cnt + 1]);
                chk[ny][nx] = 1;
            }
        }
    }
}
console.log(res.join('\n'));