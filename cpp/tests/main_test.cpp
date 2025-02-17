#include "catch2/catch_all.hpp"
#include <cstdint>
#include "p_1079.h"

int tilePossibilities(std::string tiles) {
  P_1079::Solution s;
  return s.numTilePossibilities(tiles);
}

TEST_CASE("Letter Tile Possibilities", "[numTilePossibilities]") {
  REQUIRE(tilePossibilities("AAB") == 8);
  REQUIRE(tilePossibilities("AAABBC") == 188);
  REQUIRE(tilePossibilities("V") == 1);
}
