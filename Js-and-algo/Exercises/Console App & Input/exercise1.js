console.log("Arguments: ", process.argv);

const num1=parseInt(process.argv[2]);
const op=process.argv[3];
const num2=parseInt(process.argv[4]);

if(isNaN(num1)||isNaN(num2)){
    console.error("You have to input numbers");
    process.exit()
}

let result;

if(op==='+'){
    result=num1+num2    
}
if(op==='-'){
    result=num1-num2;    
}
if(op==='*'){
    result=num1*num2    
}
if(op==='/'){
    if(num2===0){
        console.error("DAMNNN")
        process.exit()
    }
    result=num1/num2;
    
}

console.log(`${num1} ${op} ${num2} = ${result}`)