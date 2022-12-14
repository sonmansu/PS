const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let arr = fs.readFileSync(filePath).toString().replace(/\r/g, '').trim().split('\n').map(Number);

function comb(arr, n) {
    if (n === 1) {
        return arr.map(item => [item])
    } else {
        let res = [];
        arr.forEach((val, idx, arr) => {
            let fix = arr[idx];
            let rest = arr.slice(idx + 1);
            let combinations = comb(rest, n - 1);
            let addFix = combinations.map(el => [fix, ...el]);
            res.push(...addFix)
        })

        return res
    }
}

let combs = comb(arr, 7);
let result = combs.find((arr, idx) => {
    let sum = arr.reduce((prev, curr) => prev + curr, 0)
    return sum === 100
})

console.log(result.join('\n'));