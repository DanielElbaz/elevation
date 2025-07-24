const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
]

const render = function () {
    $("#timeline").empty();
    for (let post of posts) {
        const postBox = $(`<div class='post-box'>
        <p><strong>${post.name}</strong>: ${post.text}</p>
        </div>`);
        $("#timeline").append(postBox)
    }
}

$("#submit").on("click", function () {
    const name = $("#name").val();
    const text = $("#text").val();

    if (name && text) {
        posts.push({ name, text });
        render();
        $("#name").val("");
        $("#text").val("");
    }
});

render(); 
