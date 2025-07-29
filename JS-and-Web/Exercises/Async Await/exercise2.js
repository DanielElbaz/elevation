// Starter code structure:
async function getUserWithPosts(userId) {
    // Your implementation here
    // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
    // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
    // 3. Return combined data
    try {
        const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const jsonUser = await user.json()
        const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        const jsonPosts = await posts.json()
        console.log(jsonUser.name)
        console.log(jsonPosts[0].title)

        return { jsonUser, jsonPosts }


    } catch (error) {
        console.error("NOT FOUND")
    }

}

getUserWithPosts(8)
