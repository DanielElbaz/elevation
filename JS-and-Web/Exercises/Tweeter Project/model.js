class Tweeter {
    constructor() {
        this.postIdCounter = 3; //because of the dummy data
        this.commentIdCounter = 7; // kanal
        this.posts = [ {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't worry second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }]
    }

    getPosts() {
        return this.posts;
    }

    addPost(text) {
        const newPost = {
            id: "p" + this.postIdCounter,
            text: text,
            comments: []
        };
        this.postIdCounter++;
        this.posts.push(newPost);
        return this.posts;
    }


    removePost(postID) {
        this.posts = this.posts.filter(post => post.id !== postID);
        return this.posts
    }

    addComment(postID, text) {
        for (let post of this.posts) {
            if (post.id === postID) {
                const newComment = {
                    id: "c" + this.commentIdCounter,
                    text: text
                };
                this.commentIdCounter++;
                post.comments.push(newComment);
                return this.posts;
            }
        }
    }


    removeComment(postID, commentID) {
        for (let post of this.posts) {
            if (post.id === postID) {
                post.comments = post.comments.filter(comment => comment.id !== commentID)
                return this.posts
            }
        }
    }
}



