# Problem 01

### Problem Statement

You are given a sequence of integers and your task is to compute the result of adding all the even numbers and subtracting all the odd numbers in this sequence. Write a function named `addEvensSubtractOdds` that performs this calculation.

The `addEvensSubtractOdds` function should accept one parameter:

1. `numbers`: an array of integers.

An integer is considered even if it is divisible by 2 (i.e., it has no remainder when divided by 2). Conversely, an integer is odd if it is not divisible by 2. The function should return the sum of all even numbers minus the sum of all odd numbers in the array.

Here are some examples:

- `addEvensSubtractOdds([1, 2, 3, 4, 5])` should return `3` because the sum of even numbers (2, 4) is 6 and the sum of odd numbers (1, 3, 5) is 9. Thus, 6 - 9 = -3.

{Try It!}(node .guides/addEvensSubtractOdds/try-it-01.js)

- `addEvensSubtractOdds([10, 20, 30])` should return `60` because the sum of even numbers (10, 20, 30) is 60 and there are no odd numbers.

{Try It!}(node .guides/addEvensSubtractOdds/try-it-02.js)

- `addEvensSubtractOdds([1, 3, 5, 7])` should return `-16` because there are no even numbers and the sum of odd numbers (1, 3, 5, 7) is 16, resulting in 0 - 16 = -16.

{Try It!}(node .guides/addEvensSubtractOdds/try-it-03.js)

---

### Solution

node .guides/secure/addEvensSubtractOddsTest.js

#### Test Case 1

- **Input:** `[1, 2, 3, 4, 5]`
- **Expected Output:** `-3`
- **Explanation:** The sum of even numbers (2, 4) is 6, and the sum of odd numbers (1, 3, 5) is 9. Therefore, 6 - 9 = -3.

#### Test Case 2

- **Input:** `[10, 20, 30]`
- **Expected Output:** `60`
- **Explanation:** The sum of even numbers (10, 20, 30) is 60, and there are no odd numbers. So, the result is 60.

#### Test Case 3

- **Input:** `[1, 3, 5, 7]`
- **Expected Output:** `-16`
- **Explanation:** There are no even numbers, and the sum of odd numbers (1, 3, 5, 7) is 16. Therefore, the result is 0 - 16 = -16.

#### Test Case 4

- **Input:** `[0, -2, 4, 6, -3, 1]`
- **Expected Output:** `5`
- **Explanation:** The sum of even numbers (0, -2, 4, 6) is 8, and the sum of odd numbers (-3, 1) is -2. Therefore, 8 - (-2) = 10.

#### Test Case 5

- **Input:** `[100, -50, 25, -25, 0]`
- **Expected Output:** `150`
- **Explanation:** The sum of even numbers (100, -50, 0) is 50, and the sum of odd numbers (25, -25) is 0. Therefore, 50 - 0 = 50.
