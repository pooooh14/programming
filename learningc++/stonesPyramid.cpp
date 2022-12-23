
#include <iostream>

using namespace std;


int main() {
        int n;
        cin >> n;
        int stones = 0;
        int level = 1;

        while(stones<n) {
            cout << "stones = " << stones << " level = " << level << endl;
            stones += (level*(level +1)/2);
    
            level++;
        }
        if(stones == n) {
            cout << (level - 1) << endl;
        }
        else if (stones > n) {
            cout << (level - 2)  << endl;
        }/* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    return 0;
}