const express = require("express")
const app = express();
const path = require('path')


app.use(express.static(path.join(__dirname, 'dist')))
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]


app.get('/', (req, res) => {
    res.send("Server is up and running smoothly")
})

app.get('/priceCheck/:name', (req, res) => {
    const objectName = req.params.name;
    const item = store.find(i => i.name.toLowerCase() === objectName)
    if (item) {
        res.send({ price: item.price })
    } else {
        res.send({ price: null, message: "Item not found" })
    }
})

app.get('/buy/:name', (req, res) => {
    const newName = req.params.name;
    const item = store.find(i => i.name.toLowerCase() === newName)
    if (!item) {
        return res.send({ error: 'Item not found', price: null, inventory: null })
    }
    if (item.inventory <= 0) {
        return res.send({ name: item.name, inventory: 0, price: item.price, message: 'Out of stock' })
    }
    item.inventory -= 1;
    res.send({ name: item.name, inventory: item.inventory, price: item.price })

})

app.get('/sale', (req, res) => {
    const booly = req.query.admin === "true"
    if (booly) {
        for (let i = 0; i < store.length; i++) {
            if (store[i].inventory > 10) {
                store[i].price = store[i].price / 2;
            }
        }

    }
    res.send(store)
})

const PORT = 8080
app.listen(PORT, () => {
    console.log("Server is on baby!")
}
)