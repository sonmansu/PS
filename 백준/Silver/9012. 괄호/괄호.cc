#include <bits/stdc++.h>
using namespace std ;

int main() {
    cin.tie(NULL);cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int t;
    cin >> t;
//    char arr[50];
//    stack <char> s;
//    string ps;
    for (int i = 0; i < t; i++) {
        int cnt = 0;
        string ps;
        cin >> ps;
        for (int i = 0; i < ps.size(); i++) {
            if (ps[i] == '(') cnt++;
            else cnt--;
            if (cnt < 0) break;
        }
        if (cnt == 0 ) cout << "YES\n";
        else cout << "NO\n";
    }
    return 0;
}
