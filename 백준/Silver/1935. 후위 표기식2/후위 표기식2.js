const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, str, ...val] = fs.readFileSync(filePath).toString().replace(/\r/g, '').trim().split('\n');
val = val.map(Number);
// console.log(n, str, val);

let stk = [];
for (let i = 0; i < str.length; i++) {
    if (str[i] === '*') {
        stk.push(stk.pop() * stk.pop());
    } else if (str[i] === '+') {
        stk.push(stk.pop() + stk.pop());
    } else if (str[i] === '-') {
        let op1 = stk.pop();
        let op2 = stk.pop();
        stk.push(op2 - op1);
    } else if (str[i] === '/') {
        let op1 = stk.pop();
        let op2 = stk.pop();
        stk.push(op2 / op1);
    } else {
        stk.push(val[str[i].charCodeAt(0) - 65]);
    }
}

// console.log(stk);
result = (Math.floor(stk[0] * 100) / 100).toFixed(2);

console.log(result);