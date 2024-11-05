// 1
const body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "turquoise";

// 2
document.getElementsByTagName("h1")[0].innerText = "Mehmet Nadir Dere";

// 3
document.querySelector("h1 + p").classList.add("large");

// 4
const ul = document.querySelector("ul");
const li = document.createElement("li");
li.innerText = "Ipsum Lorem";
ul.append(li);

// 5
document.querySelector("ul").children[1].remove();

// 6
const img = document.createElement("img");
img.src = "images/1.jfif";
img.style.width = "50px";
document.getElementsByTagName("h1")[0].after(img);

// 7
let listItem;
for (i=0; i<10; i++) {
    listItem = document.createElement("li");
    listItem.innerText = `Eintrag ${i+1}`;
    ul.append(listItem);
}

// 8
const getRandomColorNumber = () => {
    return Math.floor(Math.random() * 255);
}

body.style.backgroundColor = `rgb(${getRandomColorNumber()}, ${getRandomColorNumber()}, ${getRandomColorNumber()})`