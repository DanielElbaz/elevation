const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? \n", fname => {
    rl.question("What is your age?\n", age => {
        console.log(`Hello ${fname} you are ${age} years old`);
        rl.close();
    });
    
});
