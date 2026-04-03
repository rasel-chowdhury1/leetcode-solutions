/**
 * Problem: 3Sum
 * LeetCode: #15
 * Difficulty: Medium
 * Topics: Array, Two Pointers, Sorting
 *
 * Approach:
 * - Sort the array in ascending order.
 * - Fix one element and use two pointers to find the remaining two numbers.
 * - Move pointers based on the current sum:
 *   - If sum < 0, move the left pointer forward.
 *   - If sum > 0, move the right pointer backward.
 *   - If sum === 0, store the triplet and skip duplicates.
 * - Skip duplicate values for the fixed element to avoid duplicate triplets.
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1) (excluding the output array)
 *
 * Key Idea:
 * - Sorting enables the efficient Two Pointers technique,
 *   reducing the brute-force O(n³) solution to O(n²).
 *
 * Author: Rasel Chowdhury
 */

var threeSum = function(nums) {

    nums.sort((a,b)=>a-b);

    let result = [];

    for(let i=0; i<nums.length-2; i++){

        // skip duplicate first number
        if(i>0 && nums[i]===nums[i-1]){
            continue;
        }

        let left=i+1;
        let right=nums.length-1;

        while(left<right){

            let sum=nums[i]+nums[left]+nums[right];

            if(sum===0){

                result.push([
                    nums[i],
                    nums[left],
                    nums[right]
                ]);

                // skip duplicates
                while(
                    left<right &&
                    nums[left]===nums[left+1]
                ){
                    left++;
                }

                while(
                    left<right &&
                    nums[right]===nums[right-1]
                ){
                    right--;
                }

                left++;
                right--;

            }

            else if(sum<0){
                left++;
            }

            else{
                right--;
            }
        }
    }

    return result;
};