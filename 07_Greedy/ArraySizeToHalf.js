
/**
You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.
Return the minimum size of the set so that at least half of the integers of the array are removed.

Example 1:

Input: arr = [3,3,3,3,5,5,5,2,2,7]
Output: 2
Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
Possible sets of size 2 are {3,5},{3,2},{5,2}.
Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has a size greater than half of the size of the old array.
Example 2:

Input: arr = [7,7,7,7,7,7]
Output: 1
Explanation: The only possible set you can choose is {7}. This will make the new array empty.
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    //get what half should be 
    let half = arr.length / 2;
    //create a map to store frequencies
    const map = new Map();
    for ( let n of arr ) {
        map.set(n, (map.get(n) || 0) + 1);
    }
    //create an array to store the frequencies in descending order
    let values = [];
    for ( const val of map.values() ) {     // here you could also do
        values.push(val);                   // const values = Array.from(map.values().sort((a, b) => b - a));
    }
    values.sort((a, b) => b - a);
    //remove numbers and keep track of half
    let removed = 0;
    let count = 0;
    for ( let v of values ) {
        removed += v;
        count++;
        if ( removed >= half ) break;
    }
    return count;
};