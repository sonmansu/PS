const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(' ').map(Number);

let maze = Array.from(Array(n + 2), () => Array(m + 2).fill(0));
let visited = Array.from(Array(n + 2), () => Array(m + 2).fill(0));

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
        maze[i][j] = input[i][j - 1];
    }
}

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

function bfs() {
    let queue = [ [1, 1, 1] ];
    while (queue.length !== 0) {
        let [sy, sx, cnt] = queue.shift();
        if (sy === n && sx === m) {
            console.log(cnt);
            return;
        }
        for (let i = 0; i < 4; i++) {
            const ny = sy + dy[i];
            const nx = sx + dx[i];
            const ncnt = cnt + 1;
            if (maze[ny][nx] === '1' && !visited[ny][nx]) {
                queue.push([ny, nx, ncnt]);
                visited[ny][nx] = 1; 
            }
        }
    }
    
}

bfs();