.PHONY: setup build run build-run test

setup:
	cmake -S . -B build

build:
	cmake --build ./build

run:
	./build/leetcode

build-run: build run

test:
	./build/test_leetcode
