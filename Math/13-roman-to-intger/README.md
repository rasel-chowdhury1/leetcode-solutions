# Roman to Integer

**LeetCode #13 — Easy**

Convert a Roman numeral into an integer.

## Approach

Used a **single-pass approach** with a Roman numeral value mapping.

The main rule is:

* If the current value is **less than the next value**, subtract the current value.
* Otherwise, add the current value.

For example:

`MCMXCIV`

* M → +1000
* CM → +900
* XC → +90
* IV → +4

**Result:** `1994`

## Example

**Input:**

```text
"MCMXCIV"
```

**Output:**

```text
1994
```

## Complexity

* **Time:** `O(n)`
* **Space:** `O(1)`

Where `n` is the length of the Roman numeral.

## Language

* JavaScript
