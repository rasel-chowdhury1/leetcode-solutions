/**
 * Problem: Zigzag Conversion
 * LeetCode: #6
 * Difficulty: Medium
 * Topics: String, Simulation
 *
 * Approach:
 * - Simulate writing characters in a zigzag pattern across rows.
 * - Use an array to represent each row.
 * - Traverse the string and append characters row by row.
 * - Change direction (down/up) when reaching first or last row.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Key Idea:
 * - Track current row and direction instead of building a matrix.
 *
 * Author: Rasel Chowdhury
 */


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s;
    let row = new Array(numRows).fill("");
    let currentRow = 0;
    let goingDown = false;
    let i = 0;

    while(i < s.length){

        row[currentRow] += s[i];

        if(currentRow === 0 || currentRow === numRows-1){
            goingDown = !goingDown;
        }

        currentRow += (goingDown ? 1: -1);
        
        i++;
    }

    return row.join("")
};