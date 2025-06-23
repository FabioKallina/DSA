/**
Given a string s, return the first character to appear twice. It is guaranteed that the input will have a duplicate character.
 */
/**
 * @param {string} s 
 * @return {character}
 */
var duplicateChar = function(s) {
    let seen = new Set();

    for (const c of s) {
        if (seen.has(c)) {
            return c;
        }
        seen.add(c);
    }
    return " ";
}
/** Time and Space Complexity:
 * Time: O(n)
 * Space: O(1) or O(m)
 */