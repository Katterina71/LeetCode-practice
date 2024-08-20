/**Alice and Bob continue their games with piles of stones.  There are a number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].  The objective of the game is to end with the most stones. 

Alice and Bob take turns, with Alice starting first.  Initially, M = 1.

On each player's turn, that player can take all the stones in the first X remaining piles, where 1 <= X <= 2M.  Then, we set M = max(M, X).

The game continues until all the stones have been taken.

Assuming Alice and Bob play optimally, return the maximum number of stones Alice can get. */

/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;

    // Create a memoization table
    const memo = Array.from({ length: n }, () => Array(n + 1).fill(-1));

    // Suffix sum array to avoid recalculating sums repeatedly
    const suffixSum = Array(n).fill(0);
    suffixSum[n - 1] = piles[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + piles[i];
    }

    // Helper function to calculate the maximum stones Alice can take
    const dp = (i, M) => {
        // Base case: if we've taken all piles, return 0
        if (i >= n) return 0;

        // If already calculated, return the stored result
        if (memo[i][M] !== -1) return memo[i][M];

        // If Alice can take all remaining piles, do that
        if (i + 2 * M >= n) return suffixSum[i];

        let maxStones = 0;

        // Iterate over all possible X (1 <= X <= 2 * M)
        for (let X = 1; X <= 2 * M; X++) {
            // Max stones Alice can get = Total stones from i to end - Stones Bob can get
            maxStones = Math.max(
                maxStones,
                suffixSum[i] - dp(i + X, Math.max(M, X))
            );
        }

        // Memoize the result
        memo[i][M] = maxStones;
        return memo[i][M];
    };

    // Start with Alice's turn, from the 0th pile with M = 1
    return dp(0, 1);
};

// Example usage:
const piles = [2, 7, 9, 4, 4];
console.log(stoneGameII(piles)); // Output: 10
