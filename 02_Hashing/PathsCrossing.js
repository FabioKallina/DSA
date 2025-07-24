
/**
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, 
respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.
Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. 
Return false otherwise.
 
Example 1:

Input: path = "NES"
Output: false 
Explanation: Notice that the path doesn't cross any point more than once.
Example 2:

Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.
*/
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let moves = {
        "N": [0, 1],
        "S": [0, -1],
        "W": [-1, 0],
        "E": [1, 0],
    }
    let seen = new Set();
    seen.add("0, 0");
    let x = 0, y = 0;

    for ( let c of path ) {
        let curr = moves[c];
        let dx = curr[0];
        let dy = curr[1];

        x += dx;
        y += dy;

        let hash = `${x}, ${y}`;

        if ( seen.has(hash) ) {
            return true;
        }
        seen.add(hash);
    }
    return false;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */