/**
 * Problem: String to Integer (atoi)
 * LeetCode: #8
 * Difficulty: Medium
 * Topics: String, Parsing
 *
 * Approach:
 * - Skip leading whitespaces.
 * - Check for optional '+' or '-' sign.
 * - Convert numeric characters into integer one by one.
 * - Stop parsing when a non-digit character is found.
 * - Handle 32-bit signed integer overflow constraints.
 *
 * Edge Cases Handled:
 * - Leading spaces
 * - Positive/negative sign
 * - Non-digit characters
 * - Integer overflow/underflow (32-bit range)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Author: Rasel Chowdhury
 */

var myAtoi = function(s) {
   let result = 0;
   let sign = 1;
   let i = 0;

   let maxValue = (2**31) - 1;
   let minValue = - (2**31)  ;

   while(i < s.length && s[i] === " ") {
    i++;
   };

   if(i < s.length && (s[i] === "+" || s[i] === "-") ) {
     if(s[i] === "-") sign = -1;
     i++;
   }

   while(i < s.length){
    let code = s.charCodeAt(i) - 48; 

    if(code < 0 || code > 9) break;

    result = result * 10 + code;

    if( result * sign > maxValue ) return maxValue;
    if(result * sign < minValue) return minValue;

    i++;
   }

   return result*sign;
};