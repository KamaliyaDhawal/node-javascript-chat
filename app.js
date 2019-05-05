const express = require('express');
const app = express();

const server = app.listen(3000, () => {
	console.log('Server is ready on port 3000');
});

app.use(express.static('public'));

// Socket install

const socket = require('socket.io');
const io = socket(server);

io.on('connection', (socket) => {
	socket.on('chat', (data) => {
		io.sockets.emit('chat', data);
	});

	socket.on('typing', (data) => {
		socket.broadcast.emit('typing', data);
	});
});


