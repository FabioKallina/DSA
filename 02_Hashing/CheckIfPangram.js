/**
A pangram is a sentence where every letter of the English alphabet appears at least once.
Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

Example 2:

Input: sentence = "leetcode"
Output: false
 */
/**
 * @param {string} sentence
 * @returns {boolean}
 */
var isPangram = function(sentence) {
    return new Set(sentence).size === 26;
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */
/*
 * Set only stores no duplicate values
 * so create a set including all values in sentence
 * if its a pangram, the size of the set will be exactly 26 (for each letter in the alphabet)
*/