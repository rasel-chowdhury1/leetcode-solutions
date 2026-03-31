/**
 * Problem: Longest Palindromic Substring
 * LeetCode: #5
 * Difficulty: Medium
 * Topics: String, Dynamic Programming, Two Pointers
 *
 * Approach:
 * - Treat each character as the center of a potential palindrome.
 * - Expand outward to check both odd-length and even-length palindromes.
 * - Track the longest palindrome found during the expansion process.
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 *
 * Author: Rasel Chowdhury
 */

var longestPalindrome = function(s) {
    let left = 0;
    let palindromicString = "";


    while(left < s.length){
       let l = left;
       let r = left;

       // odd case
       while( l >= 0 && r < s.length && s[l] === s[r] ){
        let current = s.slice(l, r+1);

        if(current.length > palindromicString.length){
            palindromicString = current;
        }

        l--;
        r++;
       }

       // even case
       l = left;
       r = left+1;

       while( l >= 0 && r < s.length && s[l] === s[r]){
          let current = s.slice(l, r+1);

          if(current.length > palindromicString.length){
            palindromicString = current;
          }

          l--;
          r++;
       }


       left++;
    }

    return palindromicString;
};