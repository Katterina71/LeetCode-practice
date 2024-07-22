// ## 2418
// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
// For each index i, names[i] and heights[i] denote the name and height of the ith person.
// Return names sorted in descending order by the people's heights.


function descending(names, heights) {
    // Combine the names and heights into an array of objects
    let people = names.map((name, index) => ({ name, height: heights[index] }));
    // Sort the array of objects by height in descending order
    people.sort((a, b) => b.height - a.height);

    // Extract the sorted names
    let sortedNames = people.map(person => person.name);

    return sortedNames;
}

const names = ["Mary", "John", "Emma"];
const heights = [180, 165, 170];

console.log(descending(names, heights));  // Output: ["Mary", "Emma", "John"]
