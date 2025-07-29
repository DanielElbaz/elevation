$("body").append(`<h1>Books</h1>`)
function fetch(queryType, queryValue) {
    if (typeof queryValue === String) {
        queryValue = queryValue.split(' ', '%20')
    }
    $.get(`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`, function (response) {
        const title = response.items[0].volumeInfo.title
        const authors = response.items[0].volumeInfo.authors
        console.log(title,authors)
        $("body").append(`<p>${title}`)
    });

}

fetch("isbn", 9789814561778)
fetch("title", "How to Win Friends and Influence People")