const http=require("http");
const { json } = require("stream/consumers");

//Simple server - always responds the same to any path
const server = http.createServer((req,res)=>{ // request, response
    // res.statusCode=200;
    // res.setHeader("Content-Type", "text/html");
    res.writeHead(200,{"Content-Type":'text/plain'})
    res.write("Hello I am Daniel");
    res.end();
})
const port=3000;

server.listen(port,()=>{ //8080 = port
    console.log(`Server is listening @ ${port}`)})

// const notes=[
//     {
//         id:1,
//         content:"bla"
//     },
//     {
//         id:2,
//         content:"lorem"
//     },
//     {
//         id:3,
//         content:"daniel"
//     }
// ]
// const server2=http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader("Content-Type","application/json");

//     if (req.url==="/"){
//         res.write("Helllo");

//     } else if(req.url==="/notes"){
//         if(req.method==="GET"){
//              res.write(JSON.stringify(notes))
//         }else if (req.method==="POST"){
//             res.write("Create")
//         }else{
//             res.statusCode=404;
//         }
       
//     }else{
//         res.statusCode=404
//         res.write("Page note found")
//     }

//     res.end();
// })

