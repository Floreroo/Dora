const Mongoose = require('mongoose')
const {
  Schema,
  model
} = require('mongoose')

const Bienvenidas = new Mongoose.Schema({

  guildName: String,
  guildID: {
    type: String
  },
  channelID: {
    type: String
  }
})

module.exports = Mongoose.model('Bienvenidas', Bienvenidas)
