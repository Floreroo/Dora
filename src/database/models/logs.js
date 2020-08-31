
const Mongoose = require('mongoose') 
const { Schema, model } = require('mongoose')

const setLogs = new Mongoose.Schema({ //Creamos el Schema
 
    guildName: String,
    guildID: { type: String },
    channelID: { type: String }
})

module.exports = Mongoose.model('logs', setLogs) 

