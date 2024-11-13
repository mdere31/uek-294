let number = document.getElementById("number")

document.getElementById("up").addEventListener("click", () => {
    number.innerText = parseInt(number.innerText)+1;

    history.pushState({number: number.innerText}, "", `?number=${number.innerText}`)
})

document.getElementById("down").addEventListener("click", () => {
    number.innerText = parseInt(number.innerText)-1;

    history.pushState({number: number.innerText}, "", `?number=${number.innerText}`)
})

window.addEventListener("popstate", (e) => {
    number.innerText = e.state.number
})