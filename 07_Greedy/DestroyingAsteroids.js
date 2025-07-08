
/**
You are given an integer array asteroids and an integer mass representing the mass of a planet. 
The planet will collide with the asteroids one by one - you can choose the order. 
If the mass of the planet is less than the mass of an asteroid, the planet is destroyed. 
Otherwise, the planet gains the mass of the asteroid. Can you destroy all the asteroids?
*/
/**
 * 
 * @param {number} mass 
 * @param {number[]} asteroids 
 * @returns {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a, b) => a - b);
    for ( const asteroid of asteroids ) {
        if (asteroid > mass) {
            return false;
        }
        mass += asteroid
    }
    return true;
}
/** Time and Space Complexity
 * Time; O(n * logn)
 * Space: O(logn)
 */