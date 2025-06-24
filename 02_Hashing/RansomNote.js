
/**
Given two strings ransomNote and magazine, 
return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote. 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 */
/**
 * 
 * @param {string} ransomNote 
 * @param {string} magazine 
 * @returns {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for ( const c of magazine ) {
        ransomNote = ransomNote.replace(c, "");
    }
    if (!ransomNote) return true;
    else return false;
    /* or
        return ransomNote.length === 0;
    */
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */