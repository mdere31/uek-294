// 1
const body = document.getElementsByTagName("body")[0];
const firstButton = document.createElement("button");
firstButton.innerHTML = "First Player";
body.prepend(firstButton);

const helloWorld = () => {
  alert("Hallo, Welt");
};

firstButton.onclick = helloWorld;

// 2
const firstGoals = document.createElement("h1");
firstGoals.innerText = 0;
body.prepend(firstGoals);

const firstCounter = () => {
  firstGoals.innerText = parseInt(firstGoals.innerText) + 1;
};

firstButton.onclick = firstCounter;

// 3
const secondGoals = document.createElement("h1");
secondGoals.innerText = 0;
body.append(secondGoals);

const secondButton = document.createElement("button");
secondButton.innerHTML = "Second Player";
body.append(secondButton);

const secondCounter = () => {
  secondGoals.innerText = parseInt(secondGoals.innerText) + 1;
};

secondButton.onclick = secondCounter;

// 4
const fieldOutside = document.createElement("div");
fieldOutside.style.backgroundColor = "white";
fieldOutside.style.width = "500px";
fieldOutside.style.height = "500px";
fieldOutside.style.marginTop = "50px";
fieldOutside.style.border = "solid black 2px";

const field = document.createElement("div");
field.style.backgroundColor = "green";
field.style.width = "440px";
field.style.height = "500px";
field.style.margin = "0 30px";

fieldOutside.append(field);
body.append(fieldOutside);

const ball = document.createElement("img");
ball.src = "images/soccer-ball-svgrepo-com.svg";
ball.style.width = "50px";

body.append(ball);

fieldOutside.addEventListener("click", (e) => {
  ball.style.position = "absolute";
  ball.style.top = `${e.clientY - 25}px`;
  ball.style.left = `${e.clientX - 25}px`;

  // .getBoundingClientRect(); holt grösse vom element

  // 5
  if (e.clientX < 40 && e.clientY > 250 && e.clientY < 750) {
    secondGoals.innerText = parseInt(secondGoals.innerText) + 1;
  } else if (e.clientX > 470 && e.clientY > 250 && e.clientY < 750) {
    firstGoals.innerText = parseInt(firstGoals.innerText) + 1;
  }
});