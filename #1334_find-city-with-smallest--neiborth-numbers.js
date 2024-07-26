//#1334

// There are n cities numbered from 0 to n-1. Given the array edges where edges[i] = [fromi, toi, weighti] represents a bidirectional and weighted edge between cities fromi and toi, and given the integer distanceThreshold.

// Return the city with the smallest number of cities that are reachable through some path and whose distance is at most distanceThreshold, If there are multiple such cities, return the city with the greatest number.

// Notice that the distance of a path connecting cities i and j is equal to the sum of the edges' weights along that path.

/**Step-by-Step Algorithm
 
Graph Representation:
Represent the cities and edges using an adjacency matrix or an adjacency list. This will help in efficiently accessing the weights between cities.


Shortest Path Calculation:

Use the Floyd-Warshall algorithm or Dijkstra's algorithm to calculate the shortest path between all pairs of cities. Floyd-Warshall is generally simpler for this problem since it handles all pairs at once.
Count Reachable Cities:

For each city, count the number of other cities that can be reached with a path distance less than or equal to the given distanceThreshold.
Find the Optimal City:

Track the number of reachable cities for each city.
Identify the city with the smallest number of reachable cities.
In case of a tie, choose the city with the greatest numerical value. */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */

var findTheCity = function(n, edges, distanceThreshold) {
    // Initialize the distance matrix with Infinity using nested for loops
    const dist = [];
    for (let i = 0; i < n; i++) {
        dist[i] = [];
        for (let j = 0; j < n; j++) {
            dist[i][j] = Infinity;
        }
    }
    
    // Set the diagonal to zero
    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }

    // Populate the distance matrix with the given edges
    for (const [from, to, weight] of edges) {
        dist[from][to] = weight;
        dist[to][from] = weight;
    }

    // Floyd-Warshall algorithm to find the shortest paths
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    // Find the city with the smallest number of reachable cities within the distance threshold
    let minReachableCities = Infinity;
    let resultCity = -1;

    for (let i = 0; i < n; i++) {
        let reachableCities = 0;
        for (let j = 0; j < n; j++) {
            if (i !== j && dist[i][j] <= distanceThreshold) {
                reachableCities++;
            }
        }
        // Update the resultCity based on the criteria
        if (reachableCities < minReachableCities || 
            (reachableCities === minReachableCities && i > resultCity)) {
            minReachableCities = reachableCities;
            resultCity = i;
        }
    }

    return resultCity;
};

// 
   


const n=4
const edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]]
const distanceThreshold = 4
console.log(findTheCity(n, edges, distanceThreshold)); 

/**Example Workflow
Initialize the Graph:

Suppose n = 4 and edges = [[0,1,3], [1,2,1], [2,3,4], [0,3,2]], and distanceThreshold = 4.
Initialize Distances:

dist = [[0, 3, Inf, 2], [3, 0, 1, Inf], [Inf, 1, 0, 4], [2, Inf, 4, 0]].
Run Floyd-Warshall Algorithm:

Update the dist matrix to find the shortest paths between all pairs of cities.
Count Reachable Cities:

For each city, count the number of reachable cities within the distanceThreshold.
Find the Optimal City:

Determine the city with the smallest number of reachable cities and, in case of a tie, the city with the greatest number.
 */

/**Detailed Explanation
Graph Representation:

Create a 2D matrix dist of size n x n where dist[i][j] represents the minimum distance from city i to city j. Initialize this matrix with infinity (Inf) for all entries except the diagonal, which should be zero (dist[i][i] = 0).
Initialize Distances:

For each edge [from, to, weight] in edges, set dist[from][to] = weight and dist[to][from] = weight since the graph is bidirectional.
Floyd-Warshall Algorithm:

Update the dist matrix to find the shortest paths:
plaintext
Copy code
for k in range(n):
    for i in range(n):
        for j in range(n):
            if dist[i][j] > dist[i][k] + dist[k][j]:
                dist[i][j] = dist[i][k] + dist[k][j]
Count Reachable Cities:

For each city i, count the number of cities j such that dist[i][j] <= distanceThreshold.
Determine the Result:

Track the minimum number of reachable cities and the corresponding city index.
If multiple cities have the same number of reachable cities, select the city with the greatest numerical value. */