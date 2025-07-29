// //request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//   //extract the geo data of the first user

//   let lat = users[0].address.geo.lat
//   let long = users[0].address.geo.lng

//   //log the data
//   console.log(`${lat}, ${long}`) //prints -37.3159, 81.1496
// })

// //request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//   //extract the geo data of the first user

//   let catchPhrase = users[users.length-1].company.catchPhrase


//   //log the data
//   console.log(`${catchPhrase}`) 
// })
// const useData = function(data){
//   console.log(data)
// }
// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: useData    

//   })
$("body").append(`<h1>Books</h1>`)
function fetch(isbn) {
    $.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`, function (response) {
        const title = response.items[0].volumeInfo.title
        console.log(title)
        $("body").append(`<p>${title}`)
    });
}
fetch(9782806269171)
fetch(1440633908)
fetch(9781945048470)
fetch(9780307417138)