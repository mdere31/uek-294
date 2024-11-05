function hallo() {
    alert("Hallo Welt")
}

const button = document.getElementById("hallo_alert_button");
button.onclick = hallo;

const createInlineElement = () => {
    const text = document.createElement("p");
    text.innerHTML = "Hallo Welt"
    document.getElementById("parent").appendChild(text);
}

const button1 = document.getElementById("hallo_create_button");
button1.onclick = createInlineElement;