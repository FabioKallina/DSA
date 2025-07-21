
/**
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"

Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
*/
/**
 * 
 * @param {string} s 
 * @returns {string}
 */
var reverseOnlyLetters = function(s) {
    let isLetter = c => {
        return /[a-zA-Z]/.test(c);
    }

    let arr = s.split("");
    let l = 0, r = arr.length - 1;
    while ( l < r ) {
        if ( !isLetter(arr[l]) ) {
            l++;
        } else if ( !isLetter(arr[r]) ) {
            r--;
        } else {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
            r--;
        }
    }
    return arr.join("");
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */