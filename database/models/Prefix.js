
const Mongoose = require('mongoose') //El Modulo
// O Tambien Puede ser asi
const { Schema, model } = require('mongoose')

const Prefix = new Mongoose.Schema({ //Creamos el Schema
 
    guildName: String,
    guildID: { type: String },
    prefix: { type: String }
})

module.exports = Mongoose.model('Prefix', Prefix) 

