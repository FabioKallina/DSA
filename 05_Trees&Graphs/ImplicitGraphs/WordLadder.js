
/**
A transformation sequence from word beginWord to word endWord using a dictionary wordList is a 
sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
*/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let q = [beginWord];
    let seen = new Set([beginWord]);
    let wordSet = new Set(wordList);
    let steps = 0;

    let allowed = "abcdefghijklmnopqrstuvwxyz";

    while ( q.length ) {
        let level = q.length;

        for ( let i = 0; i < level; i++ ) {
            let node = q.shift();
            if ( node === endWord ) return steps + 1;

            for ( let c of allowed ) {
                for ( let j = 0; j < node.length; j++ ) {
                    let nei = node.slice(0, j) + c + node.slice(j + 1);
                    if ( !seen.has(nei) && wordSet.has(nei) ) {
                        seen.add(nei);
                        q.push(nei);
                    }
                }
            }
        }
        steps++;
    }
    return 0;
};
/** Time and Space Complexity
 * Time: O(n * l)
 * Space: O(n * l)
 */