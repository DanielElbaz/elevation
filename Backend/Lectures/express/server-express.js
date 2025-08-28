const express = require('express');
const { logger } = require('../middleware/logger');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(logger)
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



app.get("/demo",(req,res)=>{
    console.log("Headers: ",req.headers)
    console.log("Method: ",req.method)
    console.log("Url: ",req.url)
    console.log("Query: ",req.query)
    console.log("Params: ",req.params)
    console.log("Body: ",req.body)
    res.send("Check console for request data")
})



const port = 8080;
app.listen(port, function () {
    console.log("Server is on at port: " + port)
})


//404 - Not Found (catch-all) -- always at the end
app.use((err,req, res,next) => {
    res.status(err.status||500).json({success:false,message:err.message||"Server error"})
});