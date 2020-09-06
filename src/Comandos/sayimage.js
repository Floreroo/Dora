
    module.exports = {
            name: 'sayimage',
            description: 'Pon algo!',
            alias: ["s-im"],
            run: (client, message, args) => {

let { MessageAttachment } = require('discord.js')

let e =  message.attachments.first().url

if(!e) return; 
message.delete()

let a = new MessageAttachment(e)
message.channel.send(a)}}

