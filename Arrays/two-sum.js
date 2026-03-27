/**
 * LeetCode #1 - Two Sum
 * Difficulty: Easy
 * Topics: Array, Brute Force
 *
 * Description:
 * Find the indices of two numbers in the array whose sum equals the target.
 *
 * Approach:
 * - Iterate through all possible pairs using nested loops.
 * - Return the indices once a matching pair is found.
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 *
 * Author: Rasel Chowdhury
 * Language: JavaScript
 */

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};