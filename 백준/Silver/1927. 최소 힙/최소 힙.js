const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let inp = fs.readFileSync(filePath).toString().split('\n').map(Number);

class Heap {
    heap = [];
    sz = 0;

    push(val) {
        this.heap[++this.sz] = val;
        let idx = this.sz;
        while (idx != 1) {
            let parentIdx = Math.floor(idx / 2);
            if (this.heap[idx] < this.heap[parentIdx]) { // 자식 < 부모
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
                idx = parentIdx;
            } else {
                return;
            }
        }
    }

    pop() {
        this.heap[1] = this.heap[this.sz--];
        if (this.sz <= 1) return;
        let idx = 1;
        while (idx * 2 <= this.sz) { // leaf node 가 아닐때만
            let lc = idx * 2, rc = idx * 2 + 1;
            let minChild = lc;
            if (rc <= this.sz && this.heap[rc] < this.heap[lc]) {
                minChild = rc;
            }
            if (this.heap[idx] <= this.heap[minChild]) return;
            [this.heap[minChild], this.heap[idx]] = [this.heap[idx], this.heap[minChild]];
            idx = minChild;
        }
    }

    top() {
        return this.heap[1];
    }

}

let heap = new Heap();
let res = [];
for (let i = 1; i <= inp[0]; i++) {
    // console.log('inp[i] :>> ',  inp[i]);
    if (inp[i] === 0) {
        if (heap.sz === 0) res.push(0);
        else {
            res.push(heap.top())
            heap.pop();
        }
    }
    else heap.push(inp[i]);
}

console.log(res.join('\n'));