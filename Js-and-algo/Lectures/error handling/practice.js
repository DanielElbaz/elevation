
// try{
//     try{
//         throw new Error("oops");
//     }finally{
//         console.log("finally")
//     }
// } catch(ex){
//     console.error("outter",ex.message)
// }
// the Output here is finally outter oops


try{
    try{
        throw new Error("oops");
    } catch(ex){
        console.error("inner",ex.message)
        // throw ex; with this row it will output outer oops also
    }finally{
        console.log("finally")
    }
}catch (ex){
    console.error("outer",ex.message)  // wont output because the firt try handled
}