
/**
You are given a string s. 
Continuously remove duplicates (two of the same character beside each other) until you can't anymore. Return the final string after this.

For example, given s = "abbaca", you can first remove the "bb" to get "aaca". Next, you can remove the "aa" to get "ca". This is the final answer.
*/
/**
 * 
 * @param {string} s 
 * @returns {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    for ( const c of s ) {
        //check for adjacent duplicates
        //add to stack
        if ( stack.length && stack[stack.length - 1] == c ) { //if the current character is equal to the most recently added to the stack
            stack.pop(); //pop the most recently added character and do not add the current since these are duplicates
        } else {
            stack.push(c); //add character to stack
        }
    }
    return stack.join(""); //join and the return the remainder of the stack
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */
