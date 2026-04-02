/**
 * Problem: Longest Common Prefix
 * LeetCode: #14
 * Difficulty: Easy
 * Topics: String
 *
 * Approach:
 * - Sort the array of strings lexicographically.
 * - Compare only the first and last strings after sorting.
 * - The common prefix between these two strings will be the
 *   longest common prefix for the entire array.
 * - Return the matching prefix.
 *
 * Time Complexity: O(n log n + m)
 * Space Complexity: O(1) or O(log n) depending on sorting implementation
 *
 * Where:
 * - n = number of strings
 * - m = length of the common prefix
 *
 * Author: Rasel Chowdhury
 */


var longestCommonPrefix = function(strs) {

    strs.sort();
    let first = strs[0];
    let last = strs[strs.length - 1];

    let i = 0;

    while (i<first.length && first[i] === last[i]){
        i++;
    }

    return first.slice(0, i)
};