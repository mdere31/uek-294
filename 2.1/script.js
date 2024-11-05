// 1
document.querySelector(".games").getElementsByTagName("li");
document.getElementsByClassName("games")[0].getElementsByTagName("li");

// 2
document.querySelectorAll(".games")[1].getElementsByTagName("li")[1];
document.getElementsByClassName("games")[1].getElementsByTagName("li")[1];

// 3
document.querySelectorAll(".games")[2].getElementsByTagName("li")[3];
document.getElementsByClassName("games")[2].getElementsByTagName("li")[3];

// 4
document.querySelectorAll(".games")[1].getElementsByTagName("li");
document.getElementsByClassName("games")[1].getElementsByTagName("li");

// 5
document.querySelectorAll("h1")[0]; // oder
document.querySelector("h1");
document.getElementsByTagName("h1")[0];

// 6
document.querySelector("#game-of-the-day");
document.getElementById("game-of-the-day");

// 7
document.querySelectorAll(".sale");
document.getElementsByClassName("sale");