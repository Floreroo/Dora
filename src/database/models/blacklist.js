
const Mongoose = require('mongoose') 
const { Schema, model } = require('mongoose')

const Blacklist = new Mongoose.Schema({ 
 
 blackID: { type: String },
 
})

module.exports = Mongoose.model('Blacklist', Blacklist) 

