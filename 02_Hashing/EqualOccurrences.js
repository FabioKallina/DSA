/**
Given a string s, determine if all characters have the same frequency.
For example, given s = "abacbc", return true, because all characters appear twice. Given s = "aaabb", return false. "a" appears 3 times, "b" appears 2 times. 3 != 2.
 */
/**
 * @param {string} s
 * @returns {boolean}
 */
var areOccurrencesEqual = function(s) {
    let counts = new Map();
    for (const c of s) {
        counts.set(c, (counts.get(c || 0) + 1));
    }

    let frequencies = new Set();
    for ( const val of counts.values() ) {
        frequencies.add(val);
    }

    return frequencies.size === 1;
}
/** Time and Space Complexity
 * Time: O(n)
 * Space:O(k) => where k could be the numbers of charcters in the input (26)
 */
/**
 * This works because you populate the counts map with the values based on each letter
 * Then you create a new Set in frequencies where you add the values of each letter in counts
 * Sets only store unique values, so if all the characters have the same frequency
 * The set will only store one value
 * Hence why you can check by compating its size to 1
 */