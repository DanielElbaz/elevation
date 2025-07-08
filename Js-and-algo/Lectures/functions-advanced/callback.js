function greetUser(name,callback){
    console.log("Hello " + name);
    callback();
}

function afterGreeting(){
    console.log("Nice to meet you");
}

greetUser("Daniel", afterGreeting);

setTimeout(afterGreeting,4000);

console.log('eof');

setTimeout(function()  {
    console.log("I am asynchrony")
}, 2000);