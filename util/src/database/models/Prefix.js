
const Mongoose = require('mongoose') 
const { Schema, model } = require('mongoose')

const Prefix = new Mongoose.Schema({ //Creamos el Schema
 
    guildName: String,
    guildID: { type: String },
    prefix: { type: String }
})

module.exports = Mongoose.model('Prefix', Prefix) 

