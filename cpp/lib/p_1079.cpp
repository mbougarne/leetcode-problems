#include "p_1079.h"

int P_1079::Solution::numTilePossibilities(string tiles) {
  array<int, 26> freq{};
  for(const auto& c: tiles) {
    freq[c - 'A'] += 1;
  }
  int result = 0;
  backtrack(freq, result);

  return result;
}

void P_1079::Solution::backtrack(span<int> freq, int& result) {
  for(int i = 0; i < 26; i++) {
    if (freq[i] > 0) {
      result += 1;
      freq[i] -= 1;

      backtrack(freq, result);

      freq[i] += 1;
    }
  }
}