const socket = io.connect('http://localhost:3000');

sendMsg = () => {
	let name = document.getElementById('handle').value;
	let message = document.getElementById('message').value;

	if(name == "") {
		alert('Please enter name'); 
	} else if(message == "") {
		alert('Please enter message');
	} else {
		socket.emit('chat', {
			name, message
		});
	}
}

onTyping = () => {
	let name = document.getElementById('handle').value;
	if(name == "") {
		alert('Please enter name');
		document.getElementById('handle').focus();
	} else {
		socket.emit('typing', { name });
	}
}

socket.on('chat', (data) => {
	feedback.innerHTML = "";
	let output = document.getElementById('output');
	output.innerHTML += '<p><strong>'+data.name+' </strong>'+data.message+'</p>';
})

socket.on('typing', (data) => {
	name = data.name;
	let feedback = document.getElementById('feedback');
	feedback.innerHTML = name+" is typing ....";
});