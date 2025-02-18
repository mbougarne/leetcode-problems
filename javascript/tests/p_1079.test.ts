import { numTilePossibilities } from "../src/problems/p_1079";

describe("", () => {
  test("LeetCode 1079 - Letter Tile Possibilities", () => {
    expect(numTilePossibilities("AAB")).toBe(8);
    expect(numTilePossibilities("ABC")).toBe(15);
    expect(numTilePossibilities("A")).toBe(1);
  
    console.log("✅ All test cases passed!");
  });
})
