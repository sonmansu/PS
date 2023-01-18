const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, ...arr] = fs.readFileSync(filePath).toString().replace(/\r/g, '').trim().split('\n').map(Number);

let binarySearch = target => {
    let st = 0;
    let en = sums.length - 1;
    while (st <= en) {
        let mid = Math.floor((st + en) / 2);
        if (target < sums[mid]) {
            en = mid - 1;
        } else if (target > sums[mid]) {
            st = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

arr.sort((a, b) => a - b);

let sums = [];

// 두 수의 합 배열 만듦
for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) { // (1) 2, 4 더해준 뒤에 4, 2 또 더 해줄 필요 없으니 j = i부터 시작하도록 변경
        sums.push(arr[i] + arr[j]);
    }
}
sums.sort((a, b) => a - b);

// a[l] - a[k]를 sums 배열에서 이분탐색으로 찾음
for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        if (binarySearch(arr[i] - arr[j]) >= 0) // 처음으로 발견한 것이 제일 크기 때문에 출력하고 종료
        {
            console.log(arr[i]);
            return;
        }
    }
}
