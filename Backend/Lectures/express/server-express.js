const express = require('express');
const app = express();

//Listening;

//root (base route)
const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}

app.get('/', function (req, res) {
    console.log("Hello Shubert")

    res.send("Hi, Welcome")
})

//book data routes
app.get('/books', (req, res) => {
    const booksInfo = {
        108: { title: "Harry Potter", author: "J.K.R" }
    }
    res.send(booksInfo)
})
app.get('/users', (req, res) => {
    const booksInfo = {
        42: { name: "Harry Potter", profession: "Wizard" }
    }
    res.send(booksInfo)
})

//parameters 
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(users[userId]);
    console.log("here")

})

app.get("/details", (req, res) => {
    let params = req.query
    console.log(params.city)

    res.send(params)
})

// 404 - Not Found (catch-all)
app.use((req, res) => {
    res.status(404).send("Page not found");
});



const port = 8080;
app.listen(port, function () {
    console.log("Server is on at port: " + port)
})