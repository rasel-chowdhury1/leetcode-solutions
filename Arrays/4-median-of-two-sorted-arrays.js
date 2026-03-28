/**
 * Problem: Median of Two Sorted Arrays
 * LeetCode: #4
 * Difficulty: Hard
 * Topics: Array, Binary Search
 *
 * Approach:
 * - Merge the two sorted arrays using the two-pointer technique.
 * - After creating a merged sorted array, calculate the median.
 * - For an odd-length array, return the middle element.
 * - For an even-length array, return the average of the two middle elements.
 *
 * Time Complexity: O(m + n)
 * Space Complexity: O(m + n)
 *
 * Note:
 * - This solution prioritizes readability and correctness.
 * - LeetCode's expected optimal solution uses Binary Search with
 *   O(log(min(m, n))) time complexity.
 *

 * Author: Rasel Chowdhury
 */

var findMedianSortedArrays = function(nums1, nums2) {

    let i = 0;
    let j = 0;
    let merge = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merge.push(nums1[i]);
            i++;
        } else {
            merge.push(nums2[j]);
            j++;
        }
    }

    while (i < nums1.length) {
        merge.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        merge.push(nums2[j]);
        j++;
    }

    let n = merge.length;
    let midPoint = Math.floor(n / 2);

    if (n % 2 !== 0) {
        return merge[midPoint];
    }

    return (merge[midPoint - 1] + merge[midPoint]) / 2;
};