
/**
Given a string s, partition s such that every substring of the partition is a palindrome. 
Return all possible palindrome partitioning of s.

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
*/
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    
    let isPalindrome = ( arr ) => {
        if ( arr.length === 1 ) return true;
        let l = 0, r = arr.length - 1;
        while ( l < r ) {
            if ( arr[l] === arr[r] ) {
                l++;
                r--;
            } else {
                return false;
            }
        }
        return true;
    }

    let backtrack = ( start, path ) => {
        if ( start === s.length ) {
            ans.push([...path]);
            return;
        }

        for ( let i = start; i < s.length; i++ ) {
            let part = s.substring(start, i + 1);

            if ( isPalindrome(part) ) {
                backtrack(i + 1, [...path, part]);
            }
        }
    }

    let ans = [];
    backtrack(0, []);
    return ans;
};