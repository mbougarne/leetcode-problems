cmake_minimum_required(VERSION 3.28)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -Wextra -pedantic")

if(CMAKE_BUILD_TYPE STREQUAL "Release")
  set(CMAKE_CXX_FLAGS_RELEASE "-O3")
endif()

project(leetcode VERSION 1.0.0 LANGUAGES CXX)

find_package(Catch2 3 QUIET)

if(NOT Catch2_FOUND)
  include(FetchContent)
  FetchContent_Declare(
    Catch2
    GIT_REPOSITORY https://github.com/catchorg/Catch2.git
    GIT_TAG v3.8.0
  )
  FetchContent_MakeAvailable(Catch2)
endif()

# Collect all implementation files in lib/
file(GLOB_RECURSE LIB_SOURCES ${CMAKE_SOURCE_DIR}/lib/*.cpp)

# Create a shared library from lib/
add_library(leetcode_lib ${LIB_SOURCES})
target_include_directories(leetcode_lib PUBLIC ${CMAKE_SOURCE_DIR}/include)

# Create the main application executable
add_executable(leetcode src/main.cpp)
target_link_libraries(leetcode PRIVATE leetcode_lib)
target_include_directories(leetcode PRIVATE ${CMAKE_SOURCE_DIR}/include)

# Enable Testing
enable_testing()

# Create the test executable
add_executable(test_leetcode tests/main_test.cpp)
target_link_libraries(test_leetcode PRIVATE leetcode_lib Catch2::Catch2WithMain)
target_include_directories(test_leetcode PRIVATE ${CMAKE_SOURCE_DIR}/include)

add_test(NAME LeetCodeTest COMMAND test_leetcode)
