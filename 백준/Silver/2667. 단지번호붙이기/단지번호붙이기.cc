#include <cstdio>
#include <deque>
#include <vector>
#include <algorithm>
#define MAX_N 25
using namespace std ;

typedef pair<int,int> pii;
int arr[MAX_N+1][MAX_N+1];
int visit[MAX_N+1][MAX_N+1];

int BFS(int i, int j) {
    visit[i][j] = 1;
    deque<pii> Q;
    Q.push_back({i, j});
    int cnt = 1;
    while (Q.size() > 0) {
        int i = Q.front().first;
        int j = Q.front().second;
        Q.pop_front();
        pii around[4] = { {i-1, j}, {i, j-1}, {i+1, j}, {i, j+1} };
        for (int i = 0; i < 4; i ++) {
            int y = around[i].first;
            int x = around[i].second;
            if (arr[y][x] == 1 && visit[y][x] == 0) {
                visit[y][x] = 1;
                cnt++;
                Q.push_back({y,x});
            }
        }
    }
    return cnt;
}

int main() {
    int N;
    scanf("%d", &N); //size of map
    vector<int> vec;

    for (int i = 1; i <= N; i++) {
        for (int j = 1; j <= N; j++) {
            scanf("%1d", &arr[i][j]);
        }
    }

    for (int i = 1; i <= N; i++) {
        for (int j = 1; j <= N; j++) {
            if (arr[i][j] == 1 && visit[i][j] == 0)
                vec.push_back(BFS(i, j));
        }
    }

    printf("%d\n", vec.size());
    sort(vec.begin(), vec.end());
    for (auto w : vec) {
        printf("%d\n", w);
    }

    return 0;
}
