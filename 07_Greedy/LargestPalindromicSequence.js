
/**
You are given a string num consisting of digits only.
Return the largest palindromic integer (in the form of a string) that can be formed using digits taken from num. It should not contain leading zeroes.
Notes:
You do not need to use all the digits of num, but you must use at least one digit.
The digits can be reordered.


Example 1:

Input: num = "444947137"
Output: "7449447"
Explanation: 
Use the digits "4449477" from "444947137" to form the palindromic integer "7449447".
It can be shown that "7449447" is the largest palindromic integer that can be formed.
Example 2:

Input: num = "00009"
Output: "9"
Explanation: 
It can be shown that "9" is the largest palindromic integer that can be formed.
Note that the integer returned should not contain leading zeroes.
*/
/** My Solution
 * 
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function(num) {
    let count = new Map();
    for ( let n of num ) {
        count.set(n, (count.get(n) || 0) + 1);
    }

    let front = [], center = "";
    for ( let i = 9; i >= 0; i-- ) {
        let digit = String(i);
        let val = count.get(digit) || 0;

        let pairs = Math.floor(val / 2);
        for ( let j = 0; j < pairs; j++ ) {
            front.push(digit);
        }

        if ( val % 2 === 1 && center === "" ) {
            center = digit;
        }
    }

    while ( front.length > 0 && front[0] === "0" ) {
        front.shift();
    }

    let frontStr = front.join("");
    let backStr = front.reverse().join("");
    let ans = frontStr + center + backStr;

    if ( ans === "" ) return "0";

    return ans;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */