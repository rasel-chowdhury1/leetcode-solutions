/**
 * Problem: Container With Most Water
 * LeetCode: #11
 * Difficulty: Medium
 * Topics: Array, Two Pointers, Greedy
 *
 * Approach:
 * - Use two pointers, one at the beginning and one at the end.
 * - Calculate the area formed by the two lines.
 * - Update the maximum area found so far.
 * - Move the pointer with the smaller height inward,
 *   since the taller line cannot increase the area if the shorter line remains.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Author: Rasel Chowdhury
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let maxArea = 0;

    while(left < right){
       let width = right - left;
       let minHeight = height[left] > height[right] ? height[right] : height[left]
       let area = minHeight * width;

       if(area > maxArea){
         maxArea = area;
       }

       if(height[left] > height[right]){
         right--;
       }
       else {
        left++;
       }
       
    }

    return maxArea;
};


const result = maxArea([1,8,6,2,5,4,8,3,7]);

console.log("Finel result =>>>> ", result);