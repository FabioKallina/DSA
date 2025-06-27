
/**
You are given a string s. Continuously remove duplicates 
(two of the same character beside each other) until you can't anymore. Return the final string after this.
For example, given s = "abbaca", you can first remove the "bb" to get "aaca". Next, you can remove the "aa" to get "ca". 
This is the final answer.
 */
/**
 * 
 * @param {string} s 
 * @returns {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    for ( const c of s ) {
        if (stack.length && (stack[stack.length - 1])) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.join("");
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */