// ##36
// Valid Sudoku
/** Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules. */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let valid = true 
    const checkValid= (boardType) => {
        for ( row of boardType) {
            for ( element of row) {
                if (element != '.') {
                    let checkRow = row.filter(e => e === element)
                    if (checkRow.length > 1) {
                       return false
                    } 
                }
            }
        }
        return true
    }


    const createColumnBoard = (board) => {
        let boardColumn = []
        for (let i=0; i<board[0].length; i++){
            boardColumn.push([])
            for (let j=0; j<board.length; j++){
                boardColumn[i].push(board[j][i])
            }
        }
        return boardColumn
    }

    const createSquareBoard = (board) => {
        let boardSquare = [];
        for (let i = 0; i < 9; i += 3) {
            for (let j = 0; j < 9; j += 3) {
                let square = [];
                for (let row = i; row < i + 3; row++) {
                    for (let col = j; col < j + 3; col++) {
                        square.push(board[row][col]);
                    }
                }
                boardSquare.push(square);
            }
        }
        return boardSquare;
    };

   valid = checkValid(board)

   if (valid) {
        let boardColumn  = createColumnBoard(board)
        valid = checkValid(boardColumn)
   }
   if (valid) { 
        let boardSquare = createSquareBoard(board)
        valid = checkValid(boardSquare)
    }
   return valid
    
};

const board1 = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board1))// Output: true

const board2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
console.log(isValidSudoku(board2))//Output: false
//Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.