const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const app = express();
//const dbURL = 'mongodb://localhost/djigoio'
const dbURL = 'mongodb://lord:djigolab12@ds245661.mlab.com:45661/djigoio'
const server = app.listen(3000, function () {
    console.log("listening on :3000")
})
const io = require('socket.io')(server)

io.on('connection', function (socket) {
    console.log(socket.id);

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('NEW_ENTRY', function () {
        io.emit('ENTRY_ADDED')
    })
});

mongoose.connect(dbURL, {
        useNewUrlParser: true
    })
    .then(db => console.log('Connected!'))
    .catch(err => console.error(err))


// Express Settings

// Middlewares
app.use(morgan('dev'))
app.use(express.json());

//Routes
app.use("/api/users", require(__dirname + '/routes/users'))

//Static files
app.use(express.static(__dirname + '/public'))