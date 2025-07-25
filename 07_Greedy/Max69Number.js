
/**
You are given a positive integer num consisting only of digits 6 and 9.
Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

Example 1:

Input: num = 9669
Output: 9969
Explanation: 
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.

Example 2:

Input: num = 9996
Output: 9999
Explanation: Changing the last digit 6 to 9 results in the maximum number.
Example 3:

Input: num = 9999
Output: 9999
Explanation: It is better not to apply any change.
*/
/**
 * 
 * @param {number} num 
 * @returns {number}
 */
var max69 = function(num) {
    //num is a number so need to turn into string
    let str = num.toString();
    let res = [];
    //initialize a variable to check for a change
    let changed = false;
    //iterate through string
    for ( let i = 0; i < str.length; i++ ) {
        //check if the number is 6 and we havent made a change yet
        if ( str[i] === "6" && !changed ) {
            res.push("9");
            changed = true;
        } else {
            res.push(str[i]);
        }
    }
    //join res and return as number
    return parseInt(res.join(""));
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */
//One Liner
var max69 = function(num) {
    return parseInt(num.toString().replace("6", "9"));
}