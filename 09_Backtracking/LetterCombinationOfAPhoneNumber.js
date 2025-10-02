
/**
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
Return the answer in any order.
A mapping of digits to letters (just like on the telephone buttons) is given below. 
Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:

Input: digits = ""
Output: []

Example 3:

Input: digits = "2"
Output: ["a","b","c"]
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    if (!digits.length) return [];
    
    let digitsToLetter = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }
    
    let backtrack = (i, comb) => {
        if ( i === digits.length ) {
            ans.push(comb);
            return;
        }
        for ( const digit of digitsToLetter[digits[i]] ) {
            backtrack(i + 1, comb + digit);
        }
    }
    let ans = [];
    backtrack(0, "");
    return ans;
};
/** Time and Space Complexity
 * Time: O(n * 4^n) 4^n because each digit maps 3 or 4 letters ( max = 4 ) so the recursion will explore up to 4^n, n being the length of digits
 * Space: O(n * 4^n)
 */