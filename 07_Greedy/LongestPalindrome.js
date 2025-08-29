
/**
Given a string s which consists of lowercase or uppercase letters, 
return the length of the longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome.

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
*/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    //need to track frequencies of each character first
    let map = new Map();

    for ( let c of s ) {
        map.set(c, (map.get(c) || 0) + 1);
    }

    //initilize length varibale to keep track of characters in palindrome
    let length = 0;
    //keep track of oddFound
    let oddFound = false;

    //loop through the frequencies
    for ( let count of map.values() ) {
        //check if it's even, because we can add all even frequencies to the palindrome
        if ( count % 2 === 0 ) {
            length += count;
        } else {
            length += count - 1; //odd counts can contribute their largest even part (ex: 5 can contribute 4);
            oddFound = true; //odd is true
        }
    }
    if ( oddFound ) length += 1; //at most one odd character can sit in the middle, so if there is at least one odd we can add 1

    return length;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(k) where k is the number of unique characters
 */