const mongoose = require('mongoose');

//schema will define a structure for our db
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    gender: String,

    status: String
})

//model parameters--> model("<database name of your choice>", <schema variable>)
const Userdb = mongoose.model('userdb', schema)

module.exports = Userdb;