// VARIABLES DEFINED FOR GAME
// ===================================================================
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;
var guessedLetters = [];

// Array of alphabet
var alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"
    , "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", 
    "x", "y", "z"];

// Computer picks random "letter" or value from alphabet array
var randomLetter = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet [randomLetter];

console.log ("Computer choice = " + computerChoice);

// GENERATES RANDOM CUMPUTER CHOICE AND ALLOWS USER TO CHOOSE LETTERS
// ===================================================================

// Listener for user key press
document.onkeyup = function (event) {
    /* Stores user key press into userChoice variable and
    converts to lowercase to avoid uppercase choices
    from being missed */
    var userChoice = event.key.toLowerCase();

    /* RegExp object for confirming that userChoice is a
    letter from the alphabet array */
    var regexp = /^[a-zA-Z]$/;

// IF STATEMENTS
// ===================================================================

        // Alerts user to try again if key other than letter is chosen
        if (!regexp.test (userChoice)) {
            alert ("Letters are in the alphabet dummy! Try again");
        }

        /* If user choice not = to computer choice > adds to guessed letters
        and updates # of choices left */
        if (userChoice != computerChoice) {
            guessedLetters.push (userChoice);
            document.getElementById ("guessedLetters").innerHTML = guessedLetters;
            guessesLeft = guessesLeft - 1;
            document.getElementById ("guessesLeft").innerHTML = guessesLeft;
            console.log(guessesLeft);
            // toDo: restrict user from guessing same letter twice
        }   

        // If user loses > updates loss count and resets
        if (guessesLeft <= 0) {
            lossCount ++;
            document.getElementById ("lossCount").innerHTML = lossCount;
            alert ("You lost");
            guessesLeft = 10;
            document.getElementById ("guessesLeft").innerHTML = guessesLeft;
            guessedLetters = [];
            document.getElementById ("guessedLetters").innerHTML = guessedLetters;
            randomLetter = Math.floor(Math.random() * alphabet.length);
            computerChoice = alphabet [randomLetter];
            console.log("New computer choice is " + computerChoice);
        }

        // If user wins > updates win count and resets
        if (userChoice == computerChoice) {
            winCount ++;
            document.getElementById ("winCount").innerHTML = winCount;
            alert ("You won!");
            randomLetter = Math.floor(Math.random() * alphabet.length);
            computerChoice = alphabet [randomLetter];
            console.log ("Computer choice = " + computerChoice);
        }
}
