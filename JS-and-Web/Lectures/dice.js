function rollDice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const chance = Math.random();

            if (chance < 0.1) {
                reject("The dice fell off the table");

            }

            const random = Math.floor(Math.random() * 6) + 1;
            resolve(`Your number is ${random}`);
        }, 500);
    })
}


rollDice().then((message) => {
    console.log("Yeah " + message)
})
    .catch((error) => {
        console.log("Arhf " + error)
    })




function oldAsyncFunction(callback) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            callback(null, "Success");
        } else {
            callback(new Error("Failed"));
        }
    }, 1000);
}

function oldAsyncFunctionPromise() {
    return new Promise((resolve, reject) => {
        oldAsyncFunction((err, result) => {
            if (err) {
                reject(err)
            } else resolve(result)
        })
    })
}

oldAsyncFunctionPromise()
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));
