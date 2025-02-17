import assert from "node:assert";
import test from "node:test";
import { numTilePossibilities } from "../src/problems/p_1079";

test("LeetCode 1079 - Letter Tile Possibilities", () => {
  assert.strictEqual(numTilePossibilities("AAB"), 8);
  assert.strictEqual(numTilePossibilities("ABC"), 15);
  assert.strictEqual(numTilePossibilities("A"), 1);

  console.log("✅ All test cases passed!");
});
