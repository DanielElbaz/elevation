function fetch(){
    $.get("https://www.googleapis.com/books/v1/volumes?q=title",function(response){
        console.log(response)

        response.items.forEach(element => {
            const title = element.volumeInfo.title;
            const authors = element.volumeInfo.authors;
            const identifiers = element.volumeInfo.industryIdentifiers
            console.log(title,authors,identifiers[0].identifier)
            
        });
    })
}

fetch()