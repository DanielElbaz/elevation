class Render {
    constructor() { }

    renderPosts(posts) {
        $("#posts").empty();

        for (let post of posts) {
            const postDiv = this.createPostDiv(post);

            const commentsDiv = $("<div>").addClass("comments");
            for (let comment of post.comments) {
                this.createCommentDiv(comment, commentsDiv);
            }
            postDiv.append(commentsDiv);

            this.createNewTwitDiv(postDiv);

            $("#posts").append(postDiv);
        }

    }


    createNewTwitDiv(postDiv) {
        const input = $("<input>").attr("type", "text").attr("placeholder", "Got something to say?").addClass("comment-input");
        const button = $("<button>").addClass("comment-button").text("Comment");
        postDiv.append(input, button);
    }

    createCommentDiv(comment, commentsDiv) {
        const commentDeletediv = $("<div>").addClass("comment-delete");
        const commentDiv = $("<div>").addClass("comment").attr("data-id", comment.id).text(comment.text);
        const deleteComment = $("<div>").addClass("delete-comment").attr("data-id", comment.id).text("X");
        commentsDiv.append(commentDeletediv, commentDiv, deleteComment);
    }

    createPostDiv(post) {
        const postDiv = $("<div>").addClass("post").attr("data-id", post.id);
        const postText = $("<div>").addClass("post-text").text(post.text);
        const deletePost = $("<div>").addClass("delete").attr("data-id", post.id).text("Delete Post");
        postDiv.append(postText, deletePost);
        return postDiv;
    }
}


