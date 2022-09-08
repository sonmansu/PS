using namespace std ;
#include <iostream>
#include <string.h>
#define endl '\n'

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);cout.tie(NULL);

    int R, C, Q, num; // 세로, 가로, 갯수
    cin >> R >> C >> Q;
    int sum[R+1][C+1]; // = {0,}; 방식으로 초기화 안됨
    memset(sum, 0, sizeof(sum));

    for (int i = 1; i <= R; i++) {
        for (int j = 1; j <= C; j++) {
            cin >> num;
            sum[i][j] = sum[i-1][j] + sum[i][j-1] - sum[i-1][j-1] + num;
        }
    }

    int x1, y1, x2, y2, div;
    for (int i = 0; i < Q; i++) {
        cin >> x1 >> y1 >> x2 >> y2;
        div = (y2 - y1 + 1) * (x2 - x1 + 1);
        cout << (sum[x2][y2] - sum[x1-1][y2] - sum[x2][y1-1] + sum[x1-1][y1-1]) / div << endl;
    }
}
