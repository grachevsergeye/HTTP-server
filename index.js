const http = require("http");
const fs = require("fs");


const Server = http.createServer((req, res) => {
    // to display HTML
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File not found')
        } else {
            res.write(data)
        }
        res.end()
    })

    // page routes and 404 is the page does not exist
    const log = `${Date.now()}: ${req.url} New request received\n`;
    fs.appendFile('log.txt', log, (err, data) => {
        switch(req.url) {
            case "/":
            res.end("Homepage");
            break;
            case "/about": 
            res.end("I am Grachev Sergey");
            break;
           default:
            res.end("404 Not found");
        }
        // res.end("Hello from server again");
    });
});

Server.listen(8000, () => console.log("Server started!"));