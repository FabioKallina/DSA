
/**
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let backtrack = (openP, closeP, s) => {
        if ( openP === closeP && openP + closeP === n * 2 ) {
            ans.push(s);
            return;
        }
        if ( openP < n ) {
            backtrack(openP + 1, closeP, s + "(");
        }
        if ( closeP < openP ) {
            backtrack(openP, closeP + 1, s + ")");
        }
    }
    let ans = [];
    backtrack(0, 0, "");
    return ans;
    
};