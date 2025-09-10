//That means a way to add letters to the screen, keep track of which ones have been added, etc etc etc.
let board;
let game;
let rowTurn = 1;
let column = 1;

//Initialization of Variables on page load
document.addEventListener("DOMContentLoaded", () => {
    game = new Game();
    board = new GameBoard();
    board.makeBoard();
});


//GameBoard object
function GameBoard() {
    //initialize variables;
    let char = '-';
    let rowOne = [];
    let rowTwo = [];
    let rowThree = [];

    //makes an array that has 3 "-" 
    const makeArray = function(x) {
        return [x, x, x];
    }

    //makeBoard() = generates three array objects with "-"
    this.makeBoard = function() {
        rowOne = makeArray(char);
        rowTwo = makeArray(char);
        rowThree = makeArray(char);
    }

    //canPlace boolean to see that they won't take up a spot
    //that has already been used
    const canPlace = function(x) {
        return (x === '-' ? true : false);
    }

    const getRowPx = function(x) {
        if (x == 1) return 455;
        if (x == 2) return 616;
        if (x == 3) return 780;
    }

    const getColPx = function(y) {
        if (y == 0) return 325;
        if (y == 1) return 510;
        if (y == 2) return 685;
    }

    //updateBoard() = changes character at place user indicated, returns true if completed successfully.
    this.updateBoard = function(x, y, letter) {
        // console.log("Running update board... Here are the stats:");
        // console.log(x + ", " + y + ", canPlace: " + canPlace(rowOne[y]));
        if (x === 1) {
            if (canPlace(rowOne[y])) {
                rowOne[y] = letter;
                return true;
            }
        }
        if (x === 2) {
            if (canPlace(rowTwo[y])) {
                rowTwo[y] = letter;
                return true;
            }
        }
        if (x === 3) {
            if (canPlace(rowThree[y])) {
                rowThree[y] = letter;
                return true;
            }
        }
        return false;
    }

    //this is where I update the DOM with getRowPx(), getColPx() to place the right image in the right place
    this.addToPage = function(x, y, imgSrc) {
        const imgElement = document.querySelector(".image-container");
        let imgDetails = `<img src=${imgSrc} id="tic-letter" 
            style="top:${getRowPx(x)}px;left:${getColPx(y)}px;">`;
        imgElement.innerHTML += imgDetails;
    
    }
    
    //returns true if one of the rows is all X or all O
    const checkRows = function() {
        if (rowOne.every(value => value === 'X') || (rowOne.every(value => value === 'O'))) {
            return true;
        }
        if (rowTwo.every(value => value === 'X') || (rowTwo.every(value => value === 'O'))) {
            return true;
        }
        if (rowThree.every(value => value === 'X') || (rowThree.every(value => value === 'O'))) {
            return true;
        }
        return false;
    }

    //returns true if one of the columns is all X or all O
    const checkColumns = function() {
        for (let i = 0; i < rowOne.length; i++) {
            if ((rowOne[i] === 'X') && (rowTwo[i] === 'X') && (rowThree[i] === 'X')) {
                return true;
            }
            if ((rowOne[i] === 'O') && (rowTwo[i] === 'O') && (rowThree[i] === 'O')) {
                return true;
            }
        }
    }

    //returns true if either of the diagonals is all X or all O
    const checkDiagonals = function() {
        if ((rowOne[0] === 'X') && (rowTwo[1] === 'X') && (rowThree[2] === 'X')) {
            return true;
        }
        if ((rowOne[0] === 'O') && (rowTwo[1] === 'O') && (rowThree[2] === 'O')) {
            return true;
        }
        if ((rowOne[2] === 'X') && (rowTwo[1] === 'X') && (rowThree[0] === 'X')) {
            return true;
        }
        if ((rowOne[2] === 'O') && (rowTwo[1] === 'O') && (rowThree[0] === 'O')) {
            return true;
        }
        return false;
    }

    //needs checkwin() to return if current player won
    this.checkWin = function() { 
        if (checkRows() || checkColumns() || checkDiagonals()) {
            return true;
        }
        return false;
    }

    //checks to see if the players tied and returns true if they did
    this.checkTie = function() {
        let sum = 0;
        sum += (rowOne.reduce((accumulator, current) => {
            const occurence = (current === 'O') ? 1 : 0;
            return accumulator + occurence;
        }, 0));
        sum += (rowTwo.reduce((accumulator, current) => {
            const occurence = (current === 'O') ? 1 : 0;
            return accumulator + occurence;
        }, 0));
        sum += (rowThree.reduce((accumulator, current) => {
            const occurence = (current === 'O') ? 1 : 0;
            return accumulator + occurence;
        }, 0));

        if ((sum >= 4) && (!this.checkWin())) {
            return true;
        }
    }
}


// //Game object
function Game() {
    
    let turnTotal = 0;

    //checks the numbers input by the user and actually take turn if they are valid
    const areValidNums = function(x, y) {
        if (isNaN(x) || (x < 1) || (x > 3)) {
            document.querySelector("#error-text").innerHTML = "Sorry. Invalid number.";
            return false;
        }
        if (isNaN(y) || (y < 0) || (y > 2)) {
            document.querySelector("#error-text").innerHTML = "Sorry. Invalid number.";
            return false;
        }
        return true;
    }
    
    //tracks X or O for internal board
    const getLetter = function() {
        return (turnTotal % 2 === 1 ? 'O' : 'X');
    }

    //tracks which image will get shown onscreen
    const getLetterImg = function() {
        return (turnTotal % 2 === 1 ? 'images/Tic-tac-O.png' : 'images/Tic-tac-toe-X.png');
    }

    //tracks whose turn it is
    this.getPlayerNum = function() {
        return (turnTotal % 2 === 1 ? 2 : 1);
    }

    //takes turn and updates board
    //would change character in gameboard object
    this.takeTurn = function(x, y, boardObj) {
        let validNums = areValidNums(x, y);
        if (validNums)
        {
            let success = boardObj.updateBoard(x, y, getLetter());
            if (success) {
                boardObj.addToPage(x, y, getLetterImg());
                document.querySelector("#error-text").innerHTML = "";
            }
            else {
                document.querySelector("#error-text").innerHTML = "You can't go somewhere that's already been filled!";
            }
        }
        turnTotal++;
        document.querySelector("#turn-text").innerHTML = `Player ${this.getPlayerNum()}, it's your turn!`;
    }
}




function turnHandler(event) {
    rowTurn = Number(document.querySelector('#row-number').value);
    column = Number(document.querySelector('#column-number').value);
    
    if(!board.checkWin() && !board.checkTie())
    {
        game.takeTurn(rowTurn, column - 1, board);
    }
    
    if (board.checkWin()) {
        //this text displays if one player won
        console.log(`You WON!!! Thanks for playing!`);
        document.querySelector("#turn-text").innerHTML = "YOU WON!!! Thanks for playing!";
        document.querySelector("#outcome-text").innerHTML = "(Refresh the page to play again with a new category)";
    }
    //this text displays if they tied
    if (board.checkTie()) {
        console.log(`You tied... that is exceedingly awkward :(`);
        document.querySelector("#turn-text").innerHTML = "You tied... that is exceedingly awkward :*(";
        document.querySelector("#outcome-text").innerHTML = "(Refresh the page to play again with a new category)";
    }   
}

document.querySelector('#take-turn').addEventListener("click", turnHandler);

/*add 123 on row and column sides
 play again buttons?
 add win line based on who won and where
 should it skip your turn if you put something in wrong? prolly not
 better tie logic
*/
