document.addEventListener("DOMContentLoaded", async () => {
  async function loadBlogPosts() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    let blogPosts = await result.json();

    renderBlogPosts(blogPosts);
  }

  const container = document.getElementById("posts");

  function renderBlogPosts(blogPosts) {
    blogPosts.forEach((blogPost) => {
      const blogArticle = document.createElement("article");
      const blogTitle = document.createElement("h1");
      const blogText = document.createElement("p");
      const deleteButton = document.createElement("button")
      deleteButton.innerText = "Delete";

      blogTitle.innerText = blogPost.title;
      blogText.innerText = blogPost.body;
      const id = blogPost.id

      deleteButton.addEventListener("click", async () => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
          });
        
        deleteButton.parentElement.remove()
      })

      blogArticle.appendChild(blogTitle);
      blogArticle.append(blogText);
      blogArticle.append(deleteButton)

      container.append(blogArticle);
    });
  }

  await loadBlogPosts();

  document.getElementById("refreshButton").addEventListener("click", () => {
    container.replaceChildren();
    loadBlogPosts();
  });

  document.getElementById("sendButton").addEventListener("click", async (e) => {
    e.preventDefault();

    const form = document.forms.postForm;

    const title = form.elements.title.value;
    const body = form.elements.body.value;

    const objectToSend = {
      title: title,
      body: body,
    };

    const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(objectToSend),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const newPost = await result.json();

    renderBlogPosts([newPost]);
  });
});
