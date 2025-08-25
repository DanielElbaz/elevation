const http = require("http");


let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];


const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", 'application/json')

    if (req.url === "/api/users") {
        if (req.method === "GET") {
            res.write(JSON.stringify(users)) //
        } else if (req.method === "POST") {
            const newUser = await readBody(req);
            if (newUser && newUser.content) {
                newUser.id = users[users.length - 1].id + 1;
                users.push(newUser);
                res.write(JSON.stringify(newUser));
            } else {
                res.statusCode = 400;
                res.write(JSON.stringify({ error: "body must include content prop" }));
            }
        }
    } 
    else if (req.method === "GET" && req.url.startsWith("/api/users/")) {
        
        const path = req.url.split("?")[0];
        const parts = path.split("/").filter(Boolean); 

        
        if (parts[0] === "api" && parts[1] === "users" && parts.length === 3) {
            const id = Number(parts[2]);      
            if (!Number.isInteger(id)) {
                res.statusCode = 400;
                return res.end(JSON.stringify({ error: "invalid id" }));
            }

            const user = users.find(u => u.id === id);
            if (!user) {
                res.statusCode = 404;
                return res.end(JSON.stringify({ error: "User not found" }));
            }

            return res.end(JSON.stringify(user));
        }
        else {
            res.statusCode = 404;
            res.write("Page not found")
        }
        res.end();
    }})

function readBody(req) {
    return new Promise((resolve, reject) => {
        let body = [];
        req
            .on("data", (chunk) => {
                body.push(chunk);              
            })
            .on("end", () => {
                body = Buffer.concat(body).toString(); 
                resolve(JSON.parse(body));              
            });
    });
}





server.listen(3000, () => {
    console.log("Server is on...!")
})