const { users } = require("./data")

function logging(req, res, next) {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
}

let requestCount = 0
function counterRequest(req, res, next) {
    requestCount++;
    req.requestCount = requestCount;
    next();
}

function validateId(req, res, next) {
    const id = Number(req.params.id)
    if (isNaN(id)) {
        return res.status(400).send("Invalid ID: must be a number")
    }
    if (id >= 0 && id <= 9) {
        req.params.id = id
        next()
    } else {
        res.status(404).send("Big error")
    }
}

function checkResourceExists(req, res, next) {
    const user = users.find(u => u.id === req.params.id)
    if (!user) return res.status(404).send("User not found")
    req.user = user;
    next()
}
function errorHandler(err, req, res, next) {
    console.error("Error caught:", err.message)
    res.status(400).json({ error: err.message })
}

module.exports = { logging, counterRequest, validateId, checkResourceExists,errorHandler }