
/**
Given a string s, reverse the order of characters in each word within a sentence while still 
preserving whitespace and initial word order.

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:

Input: s = "Mr Ding"
Output: "rM gniD"
*/
/**
 * 
 * @param {string} s
 * @returns {string} 
 */
var reverseWords = function(s) {
    //Split the input string into words and reverse each word
    const words = s.split(" ");
    const reversedWords = words.map(word => word.split("").reverse().join(""));
    // Join the reversed words to form the final result
    return reversedWords.join(" ");
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */