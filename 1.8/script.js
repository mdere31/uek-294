const calculator = () => {
  alert("Calculator. :D");

  let response = "";
  let numbersList = [];
  let operator;
  let result;
  let shouldContinue = true;

  while (shouldContinue) {
    response = prompt(
      "Write a number, and when you are done, write nothing to go to the next step."
    );

    if (response != "") {
      response = parseInt(response);
      if (!isNaN(response)) {
        numbersList.push(response);
      } else {
        alert("Write a number!!!");
      }
    } else {
      break;
    }
  }

  shouldContinue = true;

  while (shouldContinue) {
    operator = prompt("Choose an operator. (+,-,*,/)");
    switch (operator) {
      case "+":
        result = numbersList.reduce((acc, item) => acc + item, 0);
        shouldContinue = false;
        break;
      case "-":
        result = numbersList.reduce((acc, item) => acc - item);
        shouldContinue = false;
        break;
      case "*":
        result = numbersList.reduce((acc, item) => acc * item);
        shouldContinue = false;
        break;
      case "/":
        result = numbersList.reduce((acc, item) => acc / item);
        shouldContinue = false;
        break;
      default:
        alert("Write a number!");
    }
  }

  const resultElement = document.getElementById("result").appendChild(document.createElement("p"))
  resultElement.innerHTML = result;
};
calculator();
