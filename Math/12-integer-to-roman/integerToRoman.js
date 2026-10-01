
function intToRoman(num) {

  // Store all valid Roman numeral values in descending order.
  // Subtractive cases are also included:
  // 900 = CM, 400 = CD, 90 = XC, 40 = XL, 9 = IX, 4 = IV
  const values = [
    1000, 900, 500, 400,
    100, 90, 50, 40,
    10, 9, 5, 4, 1
  ];

  // Store the Roman symbols corresponding to each value.
  // For example:
  // values[0] = 1000 → symbols[0] = "M"
  // values[1] = 900  → symbols[1] = "CM"
  const symbols = [
    "M", "CM", "D", "CD",
    "C", "XC", "L", "XL",
    "X", "IX", "V", "IV", "I"
  ];

  // This will store the final Roman numeral.
  let result = "";

  // Start from the largest value and move toward the smallest.
  for (let i = 0; i < values.length; i++) {

    // Keep using the current value as long as it can be
    // subtracted from the remaining number.
    while (num >= values[i]) {

      // Add the corresponding Roman symbol to the result.
      result += symbols[i];

      // Subtract the current value from the number.
      num -= values[i];
    }
  }

  // Return the final Roman numeral.
  return result;
}

console.log(intToRoman(3949)); // "MMMCMXLIX"
