
/**
There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. 
Your goal is to visit all the rooms. When you visit a room, you may find a set of distinct keys in it. 
Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms. 
Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.
 */
/**
 * 
 * @param {number[][]} rooms 
 * @returns {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let dfs = node => {
        for ( const neighbor of rooms[node] ) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                dfs(neighbor);
            }
        }
    }
    let seen = new Set([0]);
    dfs(0);
    return seen.size == rooms.length;
}
/** Time and Space Complexity
 * Time: O(n + e)
 * Space: O(n)
 */