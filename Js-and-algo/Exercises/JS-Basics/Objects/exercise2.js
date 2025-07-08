let library = {
    books: [
        {
            title: "Mille lieux sous les mers",
            author: "Jules Verne"
        },
        {
            title: "J'accuse",
            author: "Emile Zola"
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald"
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen"
        },
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien"
        }]
}
for (let book of library.books) {
  console.log(`"${book.title}" by ${book.author}`);
}

