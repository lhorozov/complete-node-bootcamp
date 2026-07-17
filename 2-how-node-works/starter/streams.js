const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    const readable = fs.createReadStream('./test-file.txt');

    readable.pipe(res);

    // fs.readFile('./test-file.txt', 'utf-8', (err, data) => {
    //     res.end(data);
    // })
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening...')
})