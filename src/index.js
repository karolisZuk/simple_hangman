import "./styles.css";
const initialWords = ["potato", "aliens", "halloween", "dog"];
let lettersUsed = [];
let currentWord = "";
let wordProggress = [];
let playerHealth = 6;

window.guessTheWord = () => {
  let input = document.getElementById("letterInput").value;
  if (input) {
    if (!lettersUsed.includes(input)) {
      lettersUsed.push(input);
      checkWordForLetter(input);
    } else {
      alert("You already guessed this letter!");
    }
  }
  updateViews();
};

window.start = () => {
  currentWord = initialWords[Math.floor(Math.random() * initialWords.length)];
  wordProggress = currentWord.split("").map(letter => "_");
  playerHealth = 6;
  lettersUsed = [];
  updateViews();
};

const checkWordForLetter = letter => {
  if (currentWord.includes(letter)) {
    let result = [];
    currentWord.split("");
    for (let i = 0; i < currentWord.length; i++) {
      if (wordProggress[i] !== "_") {
        result.push(wordProggress[i]);
      } else if (currentWord[i] === letter) {
        result.push(letter);
      } else result.push("_");
    }
    wordProggress = result;
  } else playerHealth--;
  updateViews();
};

const updateViews = () => {
  document.getElementById("life").textContent = playerHealth;
  document.getElementById("usedLetters").textContent = lettersUsed;
  document.getElementById("progress").textContent = wordProggress;
  document.getElementById("letterInput").value = "";
};
