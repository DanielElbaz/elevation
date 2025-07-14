const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? \n",myName =>{
    rl.question("What is your email? \n",myEmail=>{
        rl.question("What is your age? \n", myAge =>{
            rl.question("What is your favourite colour? \n", myColor=>{
                console.log(`Registration Summary: \n 
                    Name: ${myName}\n 
                    Email: ${myEmail}\n
                    Age: ${myAge}\n
                    Favorite Color: ${myColor}`);
                    rl.close();
                });
            });
        });
    });
            