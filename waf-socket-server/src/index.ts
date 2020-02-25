// Setup basic express server
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

import { bar } from './event-handlers/foo'

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

app.get('/callback', (req: any, res: any) => {
  console.log('we been called with GET, budday!')

  res.send({ok: 'foo'})
})

app.post('/callback', (req: any, res: any) => {
  console.log('we been called with POST, budday!')

  res.send({ok: 'foo'})
})

// Routing
app.use(express.static(path.join(__dirname, 'public')));

// Chatroom

let numUsers = 0;

// console.log('yep, ', bar())

io.on('connection', (socket: any) => {
  let addedUser = false;

  // console.log('user connected! ', socket)
  console.log('user connected! ')
  
  socket.on('GENERIC_MESSAGE', async (data: any) => {

    const fooResult = await bar()

    socket.emit('GENERIC_MESSAGE_REPONSE', {
      username: socket.username,
      message: fooResult
    });

  })

  socket.on('new message', async (data: any) => {
    console.log('handling new message!')
    // socket.emit('dope message', {
    //   username: socket.username,
    //   message: data
    // });


    // const  g = await foo();


    socket.emit('dope message', {cool: 'foo'})
  });

  socket.on('dope response', (data: any) => {
    console.log('server got a dope response! ', data)

    socket.emit('foo baby back', {message: 'foo baby to you too!'})
  })

  socket.on('foo baby', (data: any) => {
    console.log('got a foo baby! ', data)

    socket.emit('foo baby back', {message: 'foo baby to you too!'})
  })

  // when the client emits 'add user', this listens and executes
  socket.on('add user', (username: any) => {
    if (addedUser) return;

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
  socket.on('disconnect', () => {
    if (addedUser) {
      --numUsers;

      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers
      });
    }
  });
});
