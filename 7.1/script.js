document.addEventListener("DOMContentLoaded", async () => {

    async function loadBlogPosts() {
        const url = "https://jsonplaceholder.typicode.com/posts"
        let result = await fetch(url)
        let blogPosts = await result.json()

        console.log(blogPosts)
        renderBlogPosts(blogPosts)
    }

    const container = document.getElementById("posts")

    function renderBlogPosts(blogPosts) {
        blogPosts.forEach((blogPost) => {
            const blogArticle = document.createElement("article")
            const blogTitle = document.createElement("h1")
            const blogText = document.createElement("p")

            blogTitle.innerText = blogPost.title
            blogText.innerText = blogPost.body

            blogArticle.appendChild(blogTitle)
            blogArticle.append(blogText)

            container.append(blogArticle)
        });
    }

    await loadBlogPosts()

    document.getElementById("refreshButton").addEventListener("click", () => {
        container.replaceChildren()
        loadBlogPosts()
    })
})