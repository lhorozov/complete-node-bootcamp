const EventEmitter = require('events');
const http = require('http');


class MyEvents extends EventEmitter {
    constructor() {
        super();
    }
}

const myEvent = new MyEvents();

myEvent.on('top-event', (data) => {
    console.log('top event has been emitted on ' + data + ' this month.');
})

myEvent.emit('top-event', new Date().getDate());

const server = http.createServer();
server.on('request', (req, res) => {
    console.log('new request has been sent');
    res.end('req recieved');
})
server.listen('1000', () => {
    console.log('started');
})