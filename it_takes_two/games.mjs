const games = [
    {
        name: 'Tic Tac Toe',
        image: './images/Tic-tac-toe.png',
        tags: ['Strategy'],
        playable: true,
        pagelink: 'ticTacToe.html',
        description: `The classic game of X's and O's! This game is harder to win than you'd think, but will entertain you for hours.`
    },
    {
        name: 'Hangman',
        image: './images/hangman.png',
        tags: ['Guess'],
        playable: true,
        pagelink: 'hangman.html',
        description: `Can you guess the word before your friend? Careful, you can only make three mistakes before it's game over!`
    },
    {
        name: 'Checkers',
        image: './images/Checkers.png',
        tags: ['Strategy'],
        playable: false,
        pagelink: '',
        description: `How many times can you jump over your friend's pieces on your turn? You can only stay on your color!`
    },
    {
        name: 'Infinity Runner',
        image: './images/Infinite-runner.png',
        tags: ['Runner'],
        playable: false,
        pagelink: '',
        description: 'There is no end in sight! Dodge all of the obstacles and get the highest score!'
    },
    {
        name: 'Guessing Game',
        image: './images/Guess-Who.png',
        tags: ['Guess'],
        playable: false,
        pagelink: '',
        description: 'Use your logic to puzzle through the clues and figure out who stole the cookies from the cookie jar!'
    },
    {
        name: 'Dots and Boxes',
        image: './images/Dots-And-Boxes.png',
        tags: ['Four', 'Strategy'],
        playable: false,
        pagelink: '',
        description: 'Connect dots to make lines. Connect lines to make boxes and score points and beat your friend.'
    },
    {
        name: 'Connect Four',
        image: './images/Connect-Four.png',
        tags: ['Four'],
        playable: false,
        pagelink: '',
        description: 'Classic game of connecting four of your tokens in a row before the other player does.'
    }
]

export default games;