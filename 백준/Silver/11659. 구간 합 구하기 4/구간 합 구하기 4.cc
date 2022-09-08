using namespace std ;
#include <iostream>

int main() {
    cin.tie(NULL);cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N, M, num1, num2; //수의 갯수, 합을 구해야하는 횟수
    cin >> N >> M;
    int sum[N+1] = {0}; //전부 0으로 초기화
    for (int i = 1; i <= N; i++) {
        cin >> num1;
        sum[i] = sum[i-1] + num1;
    }
    for (int i = 0; i < M; i++) {
        cin >> num1 >> num2;
        cout << sum[num2] - sum[num1-1] << '\n';
    }
}
