document.addEventListener("DOMContentLoaded", () => {
  const listsContainer = document.getElementById("lists");
  const buttonGetAll = document.getElementById("getLists");
  const loginForm = document.forms.login;

  const userLogged = document.getElementById("user");

  if (localStorage.getItem("token") == null) {
    loginForm.style.display = "block";
    userLogged.style.display = "none";
  } else {
    loginForm.style.display = "none";
    userLogged.style.display = "block";

    //hier kann man noch ausloggen, mit user image
  }

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

    //password überprüfen, ist es m294, wenn nicht, dann mit .setCustomValidity() zeigen

    const response = await fetch("http://localhost/auth/jwt/sign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      alert("Login successful!");
      const token = await response.json();
      localStorage.setItem("token", token.token);

      loginForm.style.display = "none";
    } else if (response.status >= 400 && response.status < 500) {
      alert("Login failed, e-mail or password is wrong!");
    } else {
      alert("Login failed, server error!");
    }
  });

  buttonGetAll.addEventListener("click", async () => {
    const response = await fetch("http://localhost/tasks", {
      method: "GET",
    });

    const allLists = await response.json();

    for (let list of allLists) {
      const form = document.createElement("form");

      //form erstellen pro task

      const resultTitle = list.title;
      const task = document.createElement("h2");
      task.innerText = resultTitle;

      const isCompleted = list.completed;
      let description = document.createElement("p");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      if (isCompleted) {
        description.innerText = "Completed";
        checkbox.value = true;
      } else {
        description.innerText = "Not completed";
        checkbox.value = false;
      }

      const title = document.createElement("h1");
      title.innerText = "Task:";

      listsContainer.appendChild(title);
      listsContainer.appendChild(task);
      listsContainer.appendChild(description);
      listsContainer.appendChild(checkbox);
    }
  });

  //nicht fertig, hier kommen die anderen aufgaben wie z.b. delete, get mit id, usw.
});
