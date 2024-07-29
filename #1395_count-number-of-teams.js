// ##1395
/**There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers amongst them under the following rules:

Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams). */

/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {

    //time limit error 
    let n = rating.length
    let count = 0
    //Generate All Possible Teams of 3 Soldiers:
    for (let i=0; i<n-2; i++){
        for (let j=i+1; j<n-1; j++){
            for (let k=j+1; k<n; k++){
                if ((rating[i]<rating[j] && rating[j]<rating[k]) || (rating[i]>rating[j] && rating[j]>rating[k]))
                count ++
            }
        }
    }
    return count
};


// solve time error 

var numTeams = function(rating) {

let n = rating.length;
let count = 0;

// Iterate over each soldier as the middle soldier in the team
for (let j = 0; j < n; j++) {
    let lessBefore = 0, moreBefore = 0;
    let lessAfter = 0, moreAfter = 0;

    // Count soldiers before j
    for (let i = 0; i < j; i++) {
        if (rating[i] < rating[j]) lessBefore++;
        if (rating[i] > rating[j]) moreBefore++;
    }

    // Count soldiers after j
    for (let k = j + 1; k < n; k++) {
        if (rating[k] < rating[j]) lessAfter++;
        if (rating[k] > rating[j]) moreAfter++;
    }

    // Calculate the number of valid teams with j as the middle soldier
    count += lessBefore * moreAfter + moreBefore * lessAfter;
}

return count;
};


const rating1 = [2,5,3,4,1]
console.log(numTeams(rating1)) //Output: 3
//Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1). 

const rating2 = [2,1,3]
console.log(numTeams(rating2)) //Output: 0
//Explanation: We can't form any team given the conditions.

const rating3 = [1,2,3,4]
console.log(numTeams(rating3)) //Output: 4