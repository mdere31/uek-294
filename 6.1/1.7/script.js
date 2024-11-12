const form = document.forms.form

let newGame = true;

alert("I chose a number between 1 and 100, so you have to guess it now!");

let numberToGuess = Math.floor(Math.random() * 100) + 1;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (newGame) {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    newGame = false
  }

  let numberField = parseInt(form.elements.number.value);

    if (!isNaN(numberField)) {
        if (numberField > 100 || numberField < 0) { 
            alert("The number has to be between 1 and 100!")
        } else {
            if (numberField < numberToGuess) {
                alert("Too low!");
              } else if (numberField > numberToGuess) {
                alert("Too high!");
              } else {
                alert(`You won! The number was ${numberToGuess}`)
                alert("I chose a new number between 1 and 100, so you have to guess it now!");
                newGame = true;
              }
        }
    } else {
        alert("It has to be a number!")
    }
})

// nicht fertig