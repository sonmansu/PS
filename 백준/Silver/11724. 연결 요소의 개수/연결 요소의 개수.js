const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");


const [n, m] = input[0].split(' ').map(Number);
const graph = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));
const visited = new Array(n + 1).fill(0);
let cnt = 0;

for (let i = 1; i <= m; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  graph[u][v] = 1;
  graph[v][u] = 1;

}

const dfs = function(node) {
  for (let i = 1; i <= n; i++) {
    if (graph[node][i] && !visited[i]) {
      visited[i] = 1;
      dfs(i);
    }
  }
}

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    visited[i] = 1;
    dfs(i);
    cnt++;
  }
}

console.log(cnt);