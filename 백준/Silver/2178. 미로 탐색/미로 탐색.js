const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let inp = fs.readFileSync(filePath).toString().replace(/\r/g, '').trim().split('\n');

let [n, m] = inp[0].split(' ').map(Number);
let chk = Array.from(new Array(n), () => new Array(m).fill(0))
inp = inp.slice(1);
let dx = [1, 0, -1, 0];
let dy = [0, -1, 0, 1];

let isValidCoord = (y, x) => y >= 0 && y < n && x >= 0 && x < m;
let bfs = () => {
    chk[0][0] = 1;
    let q = [[0, 0, 1]];
    while (q.length > 0) {
        let [y, x, cnt] = q.shift();

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (isValidCoord(ny, nx) && !chk[ny][nx] && inp[ny][nx] === '1') {
                if (ny === n - 1 && nx === m - 1) {
                    console.log(cnt + 1);
                    return;
                }
                chk[ny][nx] = 1;
                q.push([ny, nx, cnt + 1]);
            }
        }
    }
}

bfs();