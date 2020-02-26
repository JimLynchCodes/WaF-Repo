"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;
const login_success_1 = require("./event-handlers/login-success");
const get_nearby_listings_1 = require("./event-handlers/mongo-utils/get-nearby-listings");
server.listen(port, () => {
    console.log('Server listening at port %d', port);
});
// Routing
app.use(express.static(path.join(__dirname, 'public')));
// Chatroom
let numUsers = 0;
io.on('connection', (socket) => {
    let addedUser = false;
    console.log('user connected! ');
    console.log('mongo: ', process.env.MONGO_URI);
    io.emit('USERS_ONLINE_UPDATE', {
        usersOnline: io.engine.clientsCount
    });
    socket.on('LOGIN_SUCCESS', async (data) => {
        console.log('handling LOGIN_SUCCESS');
        const loginResult = await login_success_1.processLoginSuccess(socket, data);
        console.log('processed login: ', loginResult);
        socket.emit('LOGIN_SUCCESS_PROCESSED', {
            data: loginResult
        });
        if (loginResult.location) {
            const nearbyListings = await get_nearby_listings_1.getNearbyListings(loginResult.location);
            socket.emit('NEARBY_LISTINGS', {
                data: {
                    location: loginResult.location,
                    listings: nearbyListings
                }
            });
        }
    });
    socket.on('UPDATE_LOCATION', async (data) => {
        const nearbyListings = await get_nearby_listings_1.getNearbyListings(data.location);
        socket.emit('NEARBY_LISTINGS', {
            data: {
                location: data.location,
                listings: nearbyListings
            }
        });
    });
    socket.on('GENERIC_MESSAGE', async (data) => {
        console.log('connected1 ', io.engine.clientsCount);
        console.log('connected2 ', io.sockets.sockets.length);
        console.log('connected3 ', Object.keys(io.sockets.connected).length);
        // const fooResult = await bar()
        io.emit('GENERIC_MESSAGE_RESPONSE', {
            username: "hmm",
            message: "ok"
        });
        socket.emit('GENERIC_MESSAGE_RESPONSE', {
            username: "hmm",
            message: "ok"
        });
        console.log('hmm...');
    });
    socket.on('new message', async (data) => {
        console.log('handling new message!');
        // socket.emit('dope message', {
        //   username: socket.username,
        //   message: data
        // });
        // const  g = await foo();
        socket.emit('dope message', { cool: 'foo' });
    });
    socket.on('dope response', (data) => {
        console.log('server got a dope response! ', data);
        socket.emit('foo baby back', { message: 'foo baby to you too!' });
    });
    socket.on('foo baby', (data) => {
        console.log('got a foo baby! ', data);
        socket.emit('foo baby back', { message: 'foo baby to you too!' });
    });
    // when the client emits 'add user', this listens and executes
    socket.on('add user', (username) => {
        if (addedUser)
            return;
        // we store the username in the socket session for this client
        socket.username = username;
        ++numUsers;
        addedUser = true;
        socket.emit('login', {
            numUsers
        });
        // echo globally (all clients) that a person has connected
        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers
        });
    });
    // when the client emits 'typing', we broadcast it to others
    socket.on('typing', () => {
        socket.broadcast.emit('typing', {
            username: socket.username
        });
    });
    // when the client emits 'stop typing', we broadcast it to others
    socket.on('stop typing', () => {
        socket.broadcast.emit('stop typing', {
            username: socket.username
        });
    });
    // when the user disconnects.. perform this
    socket.on('disconnect', (socket) => {
        console.log('user disconnected', socket);
        io.emit('USERS_ONLINE_UPDATE', {
            usersOnline: io.engine.clientsCount
        });
    });
});
//# sourceMappingURL=index.js.map