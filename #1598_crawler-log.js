/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let depth = 0;
 
    for (let log of logs) {
         if (log === "../") {
             if (depth > 0) {
                 depth --;
             }
         }
             else if (log != './') {
                 depth ++;
             
         }
    } 
    return depth;
 };

 const logs = ["d1/","d2/","./","d3/","../","d31/"]
 console.log(minOperations(logs))