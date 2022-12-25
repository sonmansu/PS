const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

let result = ''
if (a > b) result = '>';
else if (a < b) result = '<';
else result = '==';

console.log(result);