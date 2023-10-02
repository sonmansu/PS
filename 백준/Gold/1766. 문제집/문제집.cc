#include <iostream>
#include <queue>
using namespace std;

int main() {
    int N, M;
    cin >> N >> M;

    vector<vector<int> > graph(N + 1);
    vector<int> degree(N + 1);
    priority_queue<int> pq;

	for (int i = 0; i < M; i++) {
		int a, b;
		cin >> a >> b;
		graph[a].push_back(b);
		degree[b]++;
	}

	for (int i = 1; i <= N; i++) {
		if (degree[i] == 0) {
			pq.push(-i);
		}
	}

	while (!pq.empty()) {
		int top = -pq.top();
		pq.pop();
		cout << top << " ";

		for (int i = 0; i < graph[top].size(); i++) {
			int to = graph[top][i];
			degree[to]--;
			if (degree[to] == 0) {
				pq.push(-to);
			}
		}
	}
}
