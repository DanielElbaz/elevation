const tweeter = new Tweeter();
const renderer = new Render();
renderer.renderPosts(tweeter.getPosts());



// delete post
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        const postId = event.target.getAttribute("data-id");
        tweeter.removePost(postId);
        const renderer = new Render();
        renderer.renderPosts(tweeter.getPosts());
    }
});

//delete comment
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-comment")) {
        const commentID = event.target.getAttribute("data-id");
        const postElement = event.target.closest(".post");
        const postID = postElement.getAttribute("data-id");
        tweeter.removeComment(postID, commentID);

        const renderer = new Render();
        renderer.renderPosts(tweeter.getPosts());
    }
});
// add comment
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("comment-button")) {
        const postElement = event.target.closest(".post");
        const postID = postElement.getAttribute("data-id");

        const input = postElement.querySelector(".comment-input");
        const text = input.value.trim();

        if (text !== "") {
            tweeter.addComment(postID, text);
            input.value = "";

            const renderer = new Render();
            renderer.renderPosts(tweeter.getPosts());
        }
    }
});
//add Tweet
document.getElementById("twit-button").addEventListener("click", function () {
    const input = document.getElementById("input");
    const text = input.value.trim();
    if (text !== "") {
        tweeter.addPost(text);
        input.value = "";
        renderer.renderPosts(tweeter.getPosts());
    }
});
