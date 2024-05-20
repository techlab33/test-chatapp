const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('New client connected');

    // socket.on('joinRoom', ({ username, room }) => {
    //     // Handle user joining a room
    //     console.log(`User ${username} joined room ${room}`);
    // });

    socket.on('sendMessage', (message) => {
        // Handle sending messages
        console.log(`Message received: ${message}`);
        io.emit('newMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
