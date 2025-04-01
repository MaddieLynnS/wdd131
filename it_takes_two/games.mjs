const games = [
    {
        name: 'Tic Tac Toe',
        image: './images/Tic-tac-toe.png',
        tags: ['strategy'],
        playable: true,
        pagelink: 'ticTacToe.html',
        description: `The classic game of X's and O's! This game is harder to win than you'd think, but will entertain you for hours.`
    },
    {
        name: 'Hangman',
        image: './images/hangman.png',
        tags: ['guess'],
        playable: true,
        pagelink: 'hangman.html',
        description: `Can you guess the word before your friend? Careful, you can only make three mistakes before it's game over!`
    },
    {
        name: 'Checkers',
        image: './images/hangman.png',
        tags: ['strategy'],
        playable: false,
        pagelink: '',
        description: `How many times can you jump over your friend's pieces on your turn? You can only stay on your color!`
    },
    {
        name: 'Infinity Runner',
        image: './images/hangman.png',
        tags: ['runner'],
        playable: false,
        pagelink: '',
        description: 'There is no end in sight! Dodge all of the obstacles and get the highest score!'
    },
    {
        name: 'Guessing Game',
        image: './images/hangman.png',
        tags: ['guess'],
        playable: false,
        pagelink: '',
        description: 'Use your logic to puzzle through the clues and figure out who stole the cookies from the cookie jar!'
    },
    {
        name: 'Dots and Boxes',
        image: './iamges/hangman.png',
        tags: ['four', 'strategy'],
        playable: false,
        pagelink: '',
        description: 'Connect dots to make lines. Connect lines to make boxes and score points and beat your friend.'
    },
    {
        name: 'Connect Four',
        image: './images/hangman.png',
        tags: ['four'],
        playable: false,
        pagelink: '',
        description: 'Classic game of connecting four of your tokens in a row before the other player does.'
    }
]

export default games;