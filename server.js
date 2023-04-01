const http = require('http');
const app = require('./app');

const port = 5000;
const server = http.createServer(app);

server.listen(port, () => {
    // console.log(`Server On PORT 3000`);
    var date = new Date();
    console.log(`Time :- ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
})