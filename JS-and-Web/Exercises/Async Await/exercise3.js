async function dashboard() {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const usersJson = await user.json();

    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const postsJson = await posts.json();

    const comments = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    const commentsJson = await comments.json();

    const summary = {
        totalUsers: usersJson.length,
        totalPosts: postsJson.length,
        totalComments: commentsJson.length,
        avgPostsPerUser: postsJson.length / usersJson.length,
        avgCommentsPerPost: commentsJson.length / postsJson.length
    };


    const postCountByUser = {};
    for (const post of postsJson) {
        const userId = post.userId;
        postCountByUser[userId] = (postCountByUser[userId] || 0) + 1;
    }


    const top3 = Object.entries(postCountByUser)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([userId, postCount]) => ({ userId: Number(userId), postCount }));


    const topUsers = top3.map(({ userId, postCount }) => {
        const user = usersJson.find(u => u.id === userId);
        const name = user?.name || "Unknown user";


        const userPosts = postsJson.filter(p => p.userId === userId);
        const userPostIds = userPosts.map(p => p.id);


        const commentCount = commentsJson.filter(comment =>
            userPostIds.includes(comment.postId)
        ).length;

        return { name, postCount, commentCount };
    });

    const recentPosts = postsJson
        .sort((a, b) => b.id - a.id)
        .slice(0, 5)
        .map(post => {
            const user = usersJson.find(u => u.id === post.userId);
            return {
                title: post.title,
                body: post.body,
                user: user?.name || "Unknown user"
            };
        });

    return { summary, topUsers, recentPosts };
}

dashboard().then(data => console.log(JSON.stringify(data, null, 2)));
