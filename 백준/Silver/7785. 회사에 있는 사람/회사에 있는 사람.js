const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let inp = fs.readFileSync(filePath).toString().split('\n');

// console.log(inp)

let set = new Set();

for (let i = 1; i <= +inp[0]; i++) {
    const [a, b] = inp[i].split(' ');
    // console.log('set :>> ', set);
    if (b === 'enter') {
        set.add(a);
    }
    else if (b === 'leave') {
        set.delete(a);
    }
}

console.log([...set].sort().reverse().join('\n'));
