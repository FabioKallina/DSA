/**
Given an array of strings strs, group the anagrams together.
For example, given strs = ["eat","tea","tan","ate","nat","bat"], return [["bat"],["nat","tan"],["ate","eat","tea"]].
 */
/**
 * @param {string[]} strs
 * @returns {string[][]}
 */
var groupAnagram = function(strs) {
    let groups = new Map();
    for ( const str of strs ) {
        let key = str.split("").sort("").join("");
        if ( !groups.has(key) ) {
            groups.set(key, []);
        }
        groups.get(key).push(str);
    }
    let ans = [];
    for ( const group of groups.values() ) {
        ans.push(group);
    }
    return ans;
}
/** Time and Space Complexity
 * Time: O(n m logn)
 * Space: O(n m)
 */