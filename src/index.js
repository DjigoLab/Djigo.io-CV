const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const app = express();


const dbURL = 'mongodb://localhost/djigoio'
mongoose.connect(dbURL, {
        useNewUrlParser: true
    })
    .then(db => console.log('Connected!'))
    .catch(err => console.error(err))


// Express Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'))
app.use(express.json());

//Routes
app.use("/api/users", require(__dirname + '/routes/users'))

//Static files
app.use(express.static(__dirname + '/public'))

app.listen(app.get('port'), () => {
    console.log('Im on at port ' + app.get('port') + '.')
})