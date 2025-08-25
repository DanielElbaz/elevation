const http=require("http")

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":'text/plain'})

    if (req.url==="/"){
        res.write("Welcome to My server!")
    }else if (req.url==="/about")
    {
        res.write("This is the about page")
    }else if (req.url==="/contact"){
        res.write("Daniel Elbaz - Full Stack Developer \n")
        res.write("email: daniel.elbaz2000@gmail.com\n")
        res.write("tel: 0587744858\n")
    }
    else{
        res.statusCode=404;
        res.write("Error 404 - Page not found")
    }
    res.end();
})

server.listen(3000,()=>{
    console.log("My server is on")
})