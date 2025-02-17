class Solution:
    def __init__(self):
        self.freq = [0 for i in range(26)]
        self.result = 0

    def numTilePossibilitier(self, tiles: str) -> int:
        for c in tiles:
            self.freq[ord(c) - ord("A")] += 1

        self.__backtrack()
        return self.result

    def __backtrack(self):
        for i in range(26):
            if self.freq[i] == 0:
                continue

            self.result += 1
            self.freq[i] -= 1

            self.__backtrack()

            self.freq[i] += 1
