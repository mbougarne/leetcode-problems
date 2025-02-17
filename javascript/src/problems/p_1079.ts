export function numTilePossibilities(tiles: string): number {
  const freq = new Array(26).fill(0);

  for (const c of tiles) {
    freq[c.charCodeAt(0) - "A".charCodeAt(0)]++;
  }

  let result = 0;

  const backtrack = () => {
    for (let i = 0; i < freq.length; i++) {
      if (freq[i] > 0) {
        result++;
        freq[i]--;
        backtrack();
        freq[i]++;
      }
    }
  };

  backtrack();

  return result;
}
