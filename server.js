const http = require('http');
const status = require('./ramusage.js')

const host = 'http://localhost';
const port = 3001;

http.createServer((req, res) => {
    let url = req.url;

    if (url === "/stats") {
        res.end(JSON.stringify(status, null, 2))
    } else {
        res.end('<h1>Seja bem-vindo</h1>');
    }
    
}).listen(3001, () => console.log(`Server is running in ${host}:${port}`));

