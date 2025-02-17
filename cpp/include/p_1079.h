#include <iostream>
#include <string>
#include <vector>
#include <array>
#include <span>

namespace P_1079 {
  using namespace std;
  class Solution {
    public:
      int numTilePossibilities(string tiles);
    
    private:
      void backtrack(span<int> freq, int& result);
  };
}
