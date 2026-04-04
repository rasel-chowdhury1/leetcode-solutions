/**
 * Problem: Reverse Integer
 * LeetCode: #7
 * Difficulty: Medium
 * Topics: Math
 *
 * Approach:
 * - Extract digits from the integer one by one using modulo (%).
 * - Build the reversed number by multiplying the current result by 10
 *   and adding the extracted digit.
 * - Preserve the original sign of the number.
 * - Return 0 if the reversed integer exceeds the 32-bit signed integer range.
 *
 * Time Complexity: O(log₁₀(n))
 * Space Complexity: O(1)
 *
 * Key Idea:
 * - Process digits from right to left and reconstruct the number in reverse order.
 * - Validate against 32-bit signed integer constraints before returning.
 *
 * Author: Rasel Chowdhury
 */

var reverse = function(x) {
 let sign = x < 0 ? -1: 1;
 let reverse = 0;
 let lastDigit = 0;
 let remain = Math.abs(x);
 while(remain){
    lastDigit = remain % 10;

    remain = Math.floor(remain/10);

    reverse = reverse*10 + lastDigit;
 }

 reverse *= sign;

 if(reverse < -(2**31) || reverse > (2**31 -1 )){
    return 0;
 }

 return reverse;
};