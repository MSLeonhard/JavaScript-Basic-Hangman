// 1. Create an array of possible words
// 2. Select one for the user to guess
// 2b. Tell user how many characters the word contains
// 3. Prompt user for a letter
// 3b. Verify that the input is only one letter
// 4. If the letter is there, increment positive score by 1 and display instances of that letter on the screen
// 5. If the letter isn't there, increment negative score by 1
// Store what the user has guessed in another array to verify against what they have already guessed
// 6. If negative score hits a certain value, the game ends

let possibleWords = [  'camera', 'xylophone', 'pillow', 'house', 'computer']

let selectedWord = Math.floor(Math.random() * possibleWords.length )

let wordLength = possibleWords[selectedWord].length

document.getElementById('length').innerHTML = `Your word is ${wordLength} characters long.`

let userInput = prompt('Guess a letter')

while (userInput.length !== 1) {
    userInput = prompt('Guess a letter')
}

let lives = 6;

if (possibleWords[selectedWord].indexOf(userInput) > -1 ) {
    console.log('Hooray, it works')
}
// get user letter
//if the letter is in the randomly selected word, do something with it
//if the letter is not in the randomly selected word, take away a life
//if the life counter reaches 0, game over



/*while ( userInput.length !== 1 || isNaN(userInput)){
    userInput = prompt('Guess a letter')
}

&& typeof(userInput) !== 'string') 
do {
    userInput = prompt('Guess a letter')
} while ( userInput.length !== 1 || isNaN(userInput))*/

console.log(selectedWord)
console.log(wordLength)