const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://Lekhu:Lekhu28@cluster1.d2l5jpn.mongodb.net/mern-rooms'

mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error', () => {
    console.log('mongodb connection failed')
})

connection.on('connected', () => {
    console.log('mongodb connection successful')
})

module.export = mongoose