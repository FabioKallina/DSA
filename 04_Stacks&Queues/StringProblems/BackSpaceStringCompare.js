/**
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
For example, given s = "ab#c" and t = "ad#c", return true. Because of the backspace, the strings are both equal to "ac".
*/
/**
 * 
 * @param {string} s 
 * @param {string} t 
 * @returns {boolean}
 */
var backspaceCompare = function(s, t) {
    let build = s => {
        let stack = [];
        for ( const c of s) {
            if ( c !== "#" ) {
                stack.push(c);
            } else if (stack.length) {
                stack.pop();
            }
        }
        return stack.join("");
    }
    return build(s) === build(t);
}
/** Time and Space Complexity
 * Time: O(n + m)
 * Space: O(n + m)
 */