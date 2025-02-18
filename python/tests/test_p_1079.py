from problems.p_1079 import Solution

def test_num_tiles_possibilities():
    solution = Solution()

    assert solution.numTilePossibilitier('AAB')  == 8
    assert solution.numTilePossibilitier('ABC')  == 15
    assert solution.numTilePossibilitier('A')  == 1
