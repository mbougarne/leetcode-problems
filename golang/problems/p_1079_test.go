package problems

import (
	"testing"
)

func TestNumTilePossibilities(t *testing.T) {
	aab := NumTilePossibilities("AAB")
	abc := NumTilePossibilities("ABC")
	a := NumTilePossibilities("A")

	if aab != 8 {
		t.Errorf("AAB = %d; want 8", aab)
	}

	if abc != 15 {
		t.Errorf("ABC = %d; want 15", abc)
	}

	if a != 1 {
		t.Errorf("A = %d; want 1", a)
	}
}
