var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const PORT = 4200

server.listen(PORT)

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

console.log(`Server started. Listening on localhost:${PORT}`)