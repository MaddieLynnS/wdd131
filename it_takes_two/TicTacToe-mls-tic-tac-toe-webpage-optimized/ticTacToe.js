                ////TIC TAC TOE////
                //In the browser//


//O//three rows of three- 0, 1 ,2 for both
//O//object for each row? => 
//O//function that adds x/o to right place
//O//something to keep track of which turn it is
//O//maybe while loop to put game inside
//O//lots of win conditions to check for
//O//check if they can even place at the spot they entered
//O//error catch when user doesn't put in a valid number 
//O//function to display board at the end of every turn
//O//prompt() to ask user what they want to put and where
//O//I think I need an object for the game itself too;
//O//make them put in an actual number
//O//I need some sort of impossible check tie functionnn

//GameBoard object
function GameBoard() {
    //initialize variables;
    let char = '-';
    let rowOne = [];
    let rowTwo = [];
    let rowThree = [];

    //makes an array that has 3 "-" 
    makeArray = function(x) {
        return [x, x, x];
    }

    //makeBoard() = generates three array objects with "-"
    this.makeBoard = function() {
        rowOne = makeArray(char);
        rowTwo = makeArray(char);
        rowThree = makeArray(char);
    }

    //showBoard() = shows board with numbers to the sides
    this.showBoard = function() {
        console.log('  1 2 3');
        console.log('1', ...rowOne);
        console.log('2', ...rowTwo);
        console.log('3', ...rowThree);
    }

    //canPlace boolean to see that they won't take up a spot
    //that has already been used
    canPlace = function(x) {
        return (x === '-' ? true : false);
    }

    //updateBoard() = changes character at place user indicated
    updateBoard = function(x, y, letter) {
        if (x === 1) {
            if (canPlace(rowOne[y])) {
                return rowOne[y] = letter;
            }
        }
        if (x === 2) {
            if (canPlace(rowTwo[y])) {
                return rowTwo[y] = letter;
            }
        }
        if (x === 3) {
            if (canPlace(rowThree[y])) {
                return rowThree[y] = letter;
            }
        }
        console.log(`You can't go somewhere that's already been filled!`);
    }
    
    //returns true if one of the rows is all X or all O
    checkRows = function() {
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
    checkColumns = function() {
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
    checkDiagonals = function() {
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

    //needs checkwin() to return if current player won
    this.checkWin = function() { 
        if (checkRows() || checkColumns() || checkDiagonals()) {
            return true;
        }
        return false;
    }
}


//Game object
function Game() {
    
    turnTotal = 0;
    
    //tracks X or O
    getLetter = function() {
        return (turnTotal % 2 === 1 ? 'O' : 'X');
    }
    //tracks whose turn it is
    this.getPlayerNum = function() {
        return (turnTotal % 2 === 1 ? 2 : 1);
    }

    //takes turn and updates board
    //would change character in gameboard object
    this.takeTurn = function(x, y) {
        updateBoard(x, y, getLetter());
        turnTotal++;
    }
}



const game = new Game();
const board = new GameBoard();
board.makeBoard();
let rowTurn = 1;
let column = 1;

console.log(` 


    `);

//////IT'S TIME TO PLAY THE GAME!!/////
while (!board.checkWin()) {
    board.showBoard();
    if (board.checkTie()) break;
    console.log(`Player ${game.getPlayerNum()}, it's your turn!`);
    while (true) {
        rowTurn = parseInt(prompt("Where do you want to go? Enter row number here: "));
        column = parseInt(prompt("Where do you want to go? Enter column number here: "));
        try {
            if (isNaN(rowTurn) || (rowTurn < 1) || (rowTurn > 3)) {
                throw new Error('Sorry. Invalid number.');
            }
            if (isNaN(column) || (column < 1) || (column > 3)) {
                throw new Error('Sorry. Invalid number.');
            }
        }
        catch (e) {
            console.log(e.message);
            continue;
        }
        break;
    }   

    if (prompt(`You want to place your letter at ${rowTurn}, ${column}. Is that correct? Enter y or n:`) === 'n') continue;
    game.takeTurn(rowTurn, column - 1);
    console.log('Turn taken.');
}
board.showBoard();

//this text displays if one player won
if (!board.checkTie()) {
    console.log(`You WON!!! Thanks for playing!`);
}
//this text displays if they tied
else {
    console.log(`You tied... that is exceedingly awkward :(`);
}