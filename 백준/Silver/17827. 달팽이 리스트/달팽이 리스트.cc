#include <bits/stdc++.h>
using namespace std ;

int main() {
    cin.tie(NULL);cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N, M, V, K;
    cin >> N >> M >> V;
    vector<int> arr(N);
    for (int i = 0; i < N; i ++) {
        cin >> arr[i];
    }

    for (int i = 0; i < M; i ++) {
        cin >> K;
        if (K < N) {
            cout << arr[K] << '\n';
        } else {
            K -= N;
            K %= (N - (V-1));
            cout << arr[K + (V-1)] << '\n';
        }
    }
}
