// To do:
//1. Get the array of words
const validWords = [
     // Animals
     "horse", "camel", "sheep", "whale", "tiger", "mouse", "snake", "puppy",
     // Colors
     "green", "black", "white", "brown",
     // Actions
     "speak", "sleep", "watch", "write", "learn", "teach", "train", "dance",
     "climb", "build", "paint", "drive", "shine", "smile", "laugh", "think",
     // House related
     "house", "floor", "chair", "table", "plate", "clock", "light", "phone",
     // Nature
     "cloud", "storm", "beach", "river", "plant", "grass", "earth", "water",
     // Food and Drink
     "bread", "juice", "pizza", "cream", "candy", "drink", "sweet",
     // Time related
     "today", "night", "daily", "early", "later",
     // Common adjectives
     "happy", "quick", "smart", "brave", "quiet", "clean", "sharp", "fresh",
     "clear", "bright", "grand", "proud", "spare", "sweet",
     // People and relationships
     "child", "adult", "friend", "group", "crowd", "guest",
     // Clothing
     "shirt", "shoes", "dress", "pants", "scarf",
     // Abstract concepts
     "peace", "dream", "truth", "trust", "power", "faith", "pride", "shame",
     // Emotions
     "angry", "sorry", "happy", "proud", "brave",
     // Miscellaneous common words
     "world", "space", "place", "thing", "sound", "music", "money", "paper",
     "story", "price", "point", "state", "style", "level", "order", "value",
     "class", "group", "range", "stage", "field", "frame", "force", "title",
     "cover", "press", "supply", "march", "share", "trade", "voice", "price",
     "start", "event", "model", "shape", "score", "speed", "count", "track"
];

// Set instructions for the game
const instructionalAlert = () => {
  const gameInstructions = document.createElement("p");
  gameInstructions.className = "instruction-alert";
  gameInstructions.innerText = alert(
    "Wordle 2.0 Instructions:\n1. You have six guesses for the daily word\n2. Type your 5 letter word guess and hit the enter button on the virtual keyboard.\n3. If the colour of the tile turns yellow, that means you picked the right letter but it is in the wrong spot. If the colour turns green, that means you chose the right letter in the right spot. If the colour turns grey that means that letter is not in the word.\nGoodluck!"
  );
};

const keys = document.querySelectorAll(".key");
const rows = document.querySelectorAll(".row");
const deleteBtn = document.querySelector(".delete");
const enterBtn = document.querySelector(".enter");
const youWinMessage = document.querySelector(".you-win");
const youLostMessage = document.querySelector(".you-lost");
const answerMessage = document.querySelector(".answer");
let wordGenerate = validWords[Math.floor(Math.random() * validWords.length)];
// gameState  - Using this to stop the game when won so you cannot keep entering letters in the grid.
let gameState = true;
// use as a global index reference ( for letters and squares)
let counter = 0;
// store the players guess in the array for comparison
let texts = ["", "", "", "", "", ""];
// use the array as comparison logic for gamestate
const checked = [true, false];

const rightLetterSound = new Audio('/Users/jeremym/sei/project1/wordle-project/mp3/mixkit-retro-game-notification-212.wav')

//directs the player back to the rules of the game
const infoButton = document.querySelector('.info')
infoButton.addEventListener('click', instructionalAlert )

// loop through each key in the keyboard html
keys.forEach((key) => {
  key.addEventListener("click", function (event) {
    // if gamestate is false stop function event. 
    if (gameState == false) { 
      return;
    }
    const letter = event.target.innerText.toUpperCase();
    //what the current column position of the guessed letter is in the grid - stops user from entering after 5th square
    let index = parseInt(counter / 5);
  
    // stops the user from inputting more then 1 row at a time - reference the checked index array to start
    if (checked[index] != true) { 
      return;
    }     
    // input players letter and count onto next box, adds the texts index to the player array as the letter
    rows[counter].innerText = letter;
    texts[index] += letter;
    counter++;
   
  });
});

deleteBtn.addEventListener("click", function () {
  // column starts on 1
  let index = parseInt(counter / 5);
  // row starts on 0 
  const letterIndex = counter % 5; 
  // removes letter from the row, checks where the letter is in comparison to the checked array
  if (letterIndex == 0 && checked[index]) return;
  rows[counter - 1].innerText = "";
  // stops the letter from carrying over to the next square on a different column causing a bug
  if (letterIndex == 0 && texts[index - 1].length == 5) {
    index--;
  }
  // removes the letter the player inputs from the "texts array"
  texts[index] = texts[index].slice(0, texts[index].length - 1);
  counter--;
});

enterBtn.addEventListener("click", function () {
  let index = parseInt(counter / 5);
  const letterIndex = counter % 5; 

  // checks the player has filled in the first 5 letters in the first row, which allows them to use the enter function
  if (letterIndex == 0 && index != 0) {
    let correctWordCounter = 0;
    let numberOfCorrect = 0;

  //looping through the players text input and compares the value of the right letters and if the word is complete - while tracking the position in the grid
    for (const text of texts[index - 1]) {
      const userGuess = correctWordCounter + (index - 1) * 5; 
      if (text == wordGenerate[correctWordCounter]) {
        rows[userGuess].classList.add("correct");
        rightLetterSound.play()
        numberOfCorrect++;
      } else {
        if (wordGenerate.includes(text)) {
          rows[userGuess].classList.add("position");
        } else {
          rows[userGuess].classList.add("wrong");
        }
      }
      correctWordCounter++;
    }
    // gives the conditions for win or lose game.
    if (numberOfCorrect == 5) { 
      gameState = false;
      youWinMessage.innerText = "You win!"
      setTimeout(() => {
        document.location.reload();
      }, 4000);
    }
    else if (index == 6) {
      gameState = false;
      youLostMessage.innerText = "You lost - try again"
      answerMessage.innerText = "The answer was : "  + wordGenerate;
      setTimeout(() => {
        document.location.reload();
      }, 4000); return
    }
    checked[index] = true; 
  }
});


console.log(wordGenerate)