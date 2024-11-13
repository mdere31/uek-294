let number = document.getElementById("number")

document.getElementById("up").addEventListener("click", () => {
    number.innerText = parseInt(number.innerText)+1;
    const a = new URLSearchParams(parseInt(number.innerText))
    console.log(a)
})

document.getElementById("down").addEventListener("click", () => {
    number.innerText = parseInt(number.innerText)-1;
})