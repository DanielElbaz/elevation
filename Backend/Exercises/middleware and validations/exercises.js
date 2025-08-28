const http = require("http");
const express = require('express');
const cors = require("cors");
const { logging, counterRequest, validateId, checkResourceExists,errorHandler } = require("./middlewares");
const { users } = require("./data")

const app = express();

app.use(express.json());
app.use(logging);
app.use(counterRequest);



app.get('/', (req, res) => {
    res.send(`Welcome , ${req.requestCount}`)
})

app.get('/about', (req, res) => {
    res.send(`About welcome,${req.requestCount}`)
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id', validateId, checkResourceExists, (req, res) => {
    res.send(req.user)
})

app.post('/users',(req,res)=>{
    const {name}=req.body;
      if (!name) return res.status(400).json({ error: "Name is required" })
  const newUser = { id: users.length + 1, name }
  users.push(newUser)
  res.status(201).json(newUser)
})

app.use(errorHandler)

app.listen(3000, () => {
    console.log("Server is on here right now ")
})

