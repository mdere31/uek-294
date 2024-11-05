const guessGame = () => {
  alert("I chose a number between 1 and 100, so you have to guess it now!");

  const numberToGuess = Math.floor(Math.random() * 100) + 1;

  let responseNumber;

  let shouldGameContinue = true;

  while (shouldGameContinue) {
    responseNumber = prompt("Guess the number!");
    if (!isNaN(responseNumber)) {
        if (responseNumber > 100 || responseNumber < 0) { 
            alert("The number has to be between 1 and 100!")
        } else {
            if (responseNumber < numberToGuess) {
                alert("Too low!");
              } else if (responseNumber > numberToGuess) {
                alert("Too high!");
              } else {
                alert(`You won! The number was ${numberToGuess}`)
                shouldGameContinue = false;
              }
        }
    } else {
        alert("It has to be a number!")
    }
  }
};

guessGame()