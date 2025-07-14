try{
const result = JSON.parse('invalid json');
console.log(result);
}catch(err){
    console.log(err.message)
}

console.log("eof")


// const x=y;
// console.log(x)



try{
    let x=y;
}catch(err){  
    console.log(err.name);      //  Reference Error
    console.log(err.message);   //  y is not defined
    console.log(err.stack);     //  stack
}