const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const chess = [1, 1, 2, 2, 2, 8];

for (let i = 0; i < input.length; i++) {
  chess[i] = chess[i] - input[i];
}

console.log(chess.join(' '));