package problems

func NumTilePossibilities(tiles string) int {
    var freq [26]int

    for _, c := range tiles {
        freq[c-'A']++
    }

    result := 0
    var backtrack func()
    
    backtrack = func() {
        for i := 0; i < 26; i++ {
            if freq[i] == 0 {
                continue
            }

            result++
            freq[i]--

            backtrack()

            freq[i]++
        }
    }

    backtrack()
    return result
}
