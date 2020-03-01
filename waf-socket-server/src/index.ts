
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

import { bar } from './event-handlers/foo'
import { processLoginSuccess } from './event-handlers/login-success'
import { getNearbyListings } from './event-handlers/mongo-utils/listings/get-nearby-listings'
import { userInfo } from 'os';
import { handleSubmitManuallyEnteredZipcode, handleSubmitUpdatedLocation } from './event-handlers/submit-zipcode';

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(path.join(__dirname, 'public')));

// Chatroom
let numUsers = 0;

io.on('connection', (socket: any) => {
  let addedUser = false;

  console.log('user connected! ')

  console.log('mongo: ', process.env.MONGO_URI)

  io.emit('USERS_ONLINE_UPDATE', {
    usersOnline: io.engine.clientsCount
  })

  socket.on('LOGIN_SUCCESS', async (data: any) => {

    console.log('handling LOGIN_SUCCESS')
    const loginResult: any = await processLoginSuccess(socket, data);

    console.log('processed login: ', loginResult)

    socket.emit('LOGIN_SUCCESS_PROCESSED', {
      data: loginResult
    });

    if (loginResult.location) {

      const nearbyListings: any = await getNearbyListings(loginResult.location);

      socket.emit('NEARBY_LISTINGS', {
        data: {
          location: loginResult.location,
          listings: nearbyListings
        }
      });
    }

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
  socket.on('disconnect', (socket: any) => {
    console.log('user disconnected', socket)

    io.emit('USERS_ONLINE_UPDATE', {
      usersOnline: io.engine.clientsCount
    })

  });


  socket.on('SUBMIT_MANUALLY_ENTERED_ZIPCODE', async (data: any) => {
    handleSubmitManuallyEnteredZipcode(socket, data)
  });

  socket.on('SUBMIT_UPDATED_LOCATION', async (data: any) => {
    handleSubmitUpdatedLocation(socket, data)
  });

  // ===== Errthing below here is OLD!!! (an not used anymore but still here just for referece. delete it soon plz. smh) ===

//   socket.on('SUBMIT_UPDATED_LOCATION', async (data: any) => {

//   const nearbyListings: any = await getNearbyListings(data.location);
//   socket.emit('NEARBY_LISTINGS', {
//     data: {
//       location: data.location,
//       listings: nearbyListings
//     }
//   });
// })


  socket.on('GENERIC_MESSAGE', async (data: any) => {

  console.log('connected1 ', io.engine.clientsCount)
  console.log('connected2 ', io.sockets.sockets.length)
  console.log('connected3 ', Object.keys(io.sockets.connected).length)

  io.emit('GENERIC_MESSAGE_RESPONSE', {
    username: "hmm",
    message: "ok"
  });

  socket.emit('GENERIC_MESSAGE_RESPONSE', {
    username: "hmm",
    message: "ok"
  });

  console.log('hmm...')

})

  socket.on('new message', async (data: any) => {
  console.log('handling new message!')
  // socket.emit('dope message', {
  //   username: socket.username,
  //   message: data
  // });


  // const  g = await foo();


  socket.emit('dope message', { cool: 'foo' })
});

socket.on('dope response', (data: any) => {
  console.log('server got a dope response! ', data)

  socket.emit('foo baby back', { message: 'foo baby to you too!' })
})

socket.on('foo baby', (data: any) => {
  console.log('got a foo baby! ', data)

  socket.emit('foo baby back', { message: 'foo baby to you too!' })
})



});
