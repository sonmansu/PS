const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let inp = fs.readFileSync(filePath).toString().replace(/\r/g, '').trim().split('\n').map(Number);


class MaxHeap {
    heap = [];
    sz = 0;

    push(val) {
        this.heap[++this.sz] = val;
        let idx = this.sz;
        while (idx != 1) {
            let parentIdx = Math.floor(idx / 2);
            if (this.heap[idx] <= this.heap[parentIdx]) return; // 자식 <= 부모
            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
            idx = parentIdx;
        }
    }

    pop() {
        this.heap[1] = this.heap[this.sz--];
        if (this.sz <= 1) return;
        let idx = 1;
        while (idx * 2 <= this.sz) { // leaf node 가 아닐때만
            let lc = idx * 2, rc = idx * 2 + 1;
            let maxChild = lc;
            if (rc <= this.sz && this.heap[rc] > this.heap[lc]) {
                maxChild = rc;
            }
            if (this.heap[idx] >= this.heap[maxChild]) return;
            [this.heap[maxChild], this.heap[idx]] = [this.heap[idx], this.heap[maxChild]];
            idx = maxChild;
        }
    }

    top() {
        return this.heap[1];
    }
}

let mh = new MaxHeap();
let res = [];
for (let i = 1; i <= inp[0]; i++) {
    if (inp[i] === 0) {
        if (mh.sz === 0) {
            res.push(0);
            continue;
        }
        res.push(mh.top());
        mh.pop();
    } else {
        mh.push(inp[i]);
    }
}

console.log(res.join('\n'));