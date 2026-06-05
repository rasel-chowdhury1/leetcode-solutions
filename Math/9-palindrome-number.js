/**
 * Problem: Palindrome Number
 * LeetCode: #9
 * Difficulty: Easy
 * Topics: Math
 *
 * Approach:
 * - Reverse the digits of the number.
 * - Compare the reversed number with the original number.
 * - If both are equal, the number is a palindrome.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * Author: Rasel Chowdhury
 */



var isPalindrome = function(x) {
    let palindrome = 0;
    let value = Math.abs(x);
    let remain = value;
    while(remain !== 0){
       let digit = remain % 10;

       remain = Math.floor(remain/10);
       
       palindrome = palindrome * 10 + digit;

    }

    if(palindrome === x){
        return true
    }
    return false
};