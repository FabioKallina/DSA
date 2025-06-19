
/**
Given a string s, return true if it is a palindrome, false otherwise.
A string is a palindrome if it reads the same forward as backward. That means, after reversing it, it is still the same string. 
For example: "abcdcba", or "racecar".
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkPalindrome = function(s) {
    //Initialize the two pointers
    left = 0;
    right = s.length - 1;

    //iterate until the pointers meet eachother
    while ( left < right ) {
        //if the pointers are not the same, it's not a palindrome
        if ( s[left] != s[right] ) {
            return false;
        }
        //increase the left pointer, decrease the right pointer
        left++;
        right--;
    }
    //if while loop finishes, it means every character was equal and the string was a palindrome
    return true;
}
/**
This algorithm is very efficient as not only does it run in O(n), but it also uses only O(1) space. 
No matter how big the input is, we always only use two integer variables. 
The time complexity is O(n) because the while loop iterations cost O(1) each, 
and there can never be more than O(n) iterations of the while loop - the pointers start at a distance of n from each other and move closer by one step each iteration.
 */