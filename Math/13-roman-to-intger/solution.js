
function romanToInt(s) {

  // Store the numeric value of each Roman numeral symbol.
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  // This will store the final integer value.
  let result = 0;

  // Traverse each character of the Roman numeral.
  for (let i = 0; i < s.length; i++) {

    // Get the numeric value of the current Roman symbol.
    const current = roman[s[i]];

    // Get the value of the next Roman symbol.
    // It will be undefined when the current symbol is the last one.
    const next = roman[s[i + 1]];

    // If the current value is smaller than the next value,
    // it means we have a subtractive combination.
    //
    // Examples:
    // IV → 5 - 1 = 4
    // IX → 10 - 1 = 9
    // XL → 50 - 10 = 40
    // CM → 1000 - 100 = 900
    if (next && current < next) {

      // Add the difference between the next and current values.
      result += next - current;

      // The next symbol has already been processed as part
      // of the subtractive pair, so skip it in the next iteration.
      i++;

    } else {

      // If the current value is greater than or equal to the next value,
      // simply add the current value.
      result += current;
    }
  }

  // Return the final integer value.
  return result;
}

console.log(romanToInt("MCMXCIV")); // 1994

 