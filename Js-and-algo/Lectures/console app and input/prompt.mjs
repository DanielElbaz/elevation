import promptSync from "prompt-sync";
const prompt=promptSync();


const fname=prompt("What is your name? ");
const age= prompt("What is your age? ");

console.log(`Hello ${fname}, you are ${age} years old`)