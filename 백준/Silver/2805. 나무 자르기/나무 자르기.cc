using namespace std ;
#include <climits>
#include <iostream>
#include <algorithm>

int main() {
    int tree_num, target;
    cin >> tree_num >> target;
    int tree[tree_num + 1], sum[tree_num + 1];
    tree[0] = sum[0] = 0;
    for (int i = 1; i <= tree_num; i++) {
        cin >> tree[i];
    }
    sort(tree+1, tree+tree_num+1);

    //making prefix array
    for (int i = 1; i <= tree_num; i++) {
        sum[i] = sum[i-1] + tree[i];
    }

    int j, i = tree_num, val = 0;
    while (val < target) {
        for (j = tree[i]-1; j >= tree[i-1]; j--) { 
            val = sum[tree_num] - sum[i-1] - j*(tree_num-i+1);
            if (val >= target) {
                cout << j;
                return 0;
            }
        }
        i--;
    }
    cout << j ;
    return 0;
}
