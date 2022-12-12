#include <bits/stdc++.h>
#define MIN -1000000
#define MAX 1000000
using namespace std ;

int main() {
    cin.tie(NULL);
	ios::sync_with_stdio(false);
    int a, minVal = MAX , maxVal = MIN, temp;
    cin >> a;
    for (int i = 0; i < a; i++) {
        cin >> temp;
        if (minVal > temp) {
            minVal = temp;
        }
        if (maxVal < temp) {
            maxVal = temp;
        }
    }
    cout << minVal << " " << maxVal;

}
