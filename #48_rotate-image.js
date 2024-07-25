// ##48
/*You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.* */

/**Transpose the Matrix: Convert rows to columns. Specifically, swap the element at 
 (i,j) with the element at (j,i). i<j
Reverse Each Row: Reverse the order of elements in each row to achieve the 90-degree rotation. */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    for (let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[i].length; j++){
            if (i<j) {           
                let holdElement = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = holdElement
        }}
    }
    for (let row of matrix) {
        row.reverse()
    }
    console.log(matrix)
    return matrix
};

let  matrix1 = [[1,2,3],[4,5,6],[7,8,9]]
console.log(rotate(matrix1))
//Output: [[7,4,1],[8,5,2],[9,6,3]]

const matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
console.log(rotate(matrix2))
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]