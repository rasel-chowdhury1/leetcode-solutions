/**
 * Problem: Longest Substring Without Repeating Characters
 * LeetCode: #3
 * Difficulty: Medium
 * Topics: String, Hash Set, Sliding Window
 *
 * Approach:
 * - Use the Sliding Window technique with two pointers.
 * - Maintain a set to track unique characters within the current window.
 * - If a duplicate character is found, shrink the window from the left
 *   until the duplicate is removed.
 * - Update the maximum window size during traversal.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(min(n, m))
 * where:
 * - n = length of the string
 * - m = size of the character set
 *
 * Author: Rasel Chowdhury
 */

var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for( let right = 0; right< s.length; right++){

        while(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};