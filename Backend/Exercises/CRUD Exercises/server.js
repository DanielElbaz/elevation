const http = require('http')
const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', (req, res) => {
  res.send("Server is up and running on port 1950")
})

let wordCounter = {}


app.get('/word/:word', (req, res) => {
  const word = String(req.params.word).toLowerCase()
  res.json({ count: wordCounter[word] || 0 })
})


app.post('/word', (req, res) => {
  const { word } = req.body
  if (!word || typeof word !== "string") {
    return res.status(400).json({ error: "Request must include a string field 'word'" })
  }
  const key = word.toLowerCase()
  wordCounter[key] = (wordCounter[key] || 0) + 1
  res.json({ text: `Added ${word}`, currentCount: wordCounter[key] })
})


app.post('/sentence', (req, res) => {
  const { sentence } = req.body
  if (!sentence || typeof sentence !== "string") {
    return res.status(400).json({ error: "Request must include a string field 'sentence'" })
  }


  const words = sentence
    .toLowerCase()
    .split(/\s+/)
    .map(w => w.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '')) 
    .filter(w => w.length > 0)

  let numNewWords = 0
  let numOldWords = 0

  for (const w of words) {
    if (wordCounter[w]) {
      wordCounter[w]++
      numOldWords++
    } else {
      wordCounter[w] = 1
      numNewWords++
    }
  }


  res.json({
    text: `Added ${numNewWords} words, ${numOldWords} already existed`,
    currentCount: -1
  })
})

app.delete('/word/:word',(req,res)=>{
    const word=String(req.params.word).toLowerCase();

    if(!wordCounter[word]){
        return res.status(404).json({error:`The word ${word} does not exist here`})
    }
    delete wordCounter[word];
    res.status(200).json({message: `The word ${word} was deleted`})
});

const PORT = 1950
app.listen(PORT, () => {
  console.log("runningggg")
})
