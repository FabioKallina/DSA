
/**
A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.
Suppose we need to investigate a mutation from a gene string startGene to a gene string 
endGene where one mutation is defined as one single character changed in the gene string.
For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.
Given the two gene strings startGene and endGene and the gene bank bank, return the minimum number of mutations needed to mutate 
from startGene to endGene. If there is no such a mutation, return -1.
Note that the starting point is assumed to be valid, so it might not be included in the bank.

Example 1:

Input: startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]
Output: 1

Example 2:

Input: startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
Output: 2
*/
/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    let q = [startGene];
    let seen = new Set(startGene);
    let steps = 0;

    let allowed = ["A", "C", "G", "T"];

    while ( q.length ) {
        let level = q.length;
        for ( let i = 0; i < level; i++ ) {
            let node = q.shift();
            if ( node === endGene ) return steps;

            for ( let c of allowed ) {
                for ( let j = 0; j < node.length; j++ ) {
                    let nei = node.slice(0, j) + c + node.slice(j + 1);
                    if ( !seen.has(nei) && bank.includes(nei) ) {
                        q.push(nei);
                        seen.add(nei);
                    }
                }
            }
        }
        steps++;
    }
    return -1;
};
/** Time and Space Complexity
 * Time: O(n * l) where n is the number of nodes in the bank and l the length of them
 * Space: O(n)
 */