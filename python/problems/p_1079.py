class Solution:
    def __init__(self):
        self.freq = None
        self.result = None

    def numTilePossibilitier(self, tiles: str) -> int:
        self.freq = [0 for i in range(26)]
        self.result = 0
        
        for c in tiles:
            self.freq[ord(c) - ord("A")] += 1

        print(self.freq)
        self.__backtrack()
        print(self.result)
        return self.result

    def __backtrack(self):
        for i in range(26):
            if self.freq[i] == 0:
                continue

            self.result += 1
            self.freq[i] -= 1

            self.__backtrack()

            self.freq[i] += 1
