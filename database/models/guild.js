const mongoose = require('mongoose')


const guildSchema = mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,
    guildId: String,
    guildName: String,
});

module.exports = mongoose.model('Guild', guildSchema, 'guilds')