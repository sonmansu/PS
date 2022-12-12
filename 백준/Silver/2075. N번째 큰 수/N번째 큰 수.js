const readline = require('readline');
// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class MinHeap {
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
    print() {
        for (let i = 1; i <= this.sz; i++) console.log(this.heap[i]);
    }
}
const mh = new MinHeap();

let n = 0;
let count = -1;
const min = new MinHeap();

rl.on("line", function (line) {
    if (count === -1) {
        count = parseInt(line);
        n = count;
        return;
    }
    //삽입및 사제하는 구문
    line.split(' ').forEach((value) => {
        mh.push(parseInt(value));
        if (mh.sz > n) mh.pop();
    });
    count--;
    if (count === 0) rl.close();
}).on("close", function () {
    console.log(mh.top());
    process.exit();
});
