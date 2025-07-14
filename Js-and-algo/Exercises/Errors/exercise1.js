function safeJsonParse(str){
    try{
    const valid=JSON.parse(str);
    return valid
}
    catch(err){
        console.error("Invalid JSON format "+ err.message)
        
    }
}

console.log(safeJsonParse(`{"name":"Daniel"}`));