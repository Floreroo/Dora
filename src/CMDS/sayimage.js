const Base = require('../../base/Commands')

class SayImage extends Base {
    constructor(client){
        super(client, {
            name: 'sayimage',
            description: 'Pon algo!',
            usage: 'sayimage <imagen>',
            category: 'Diversion',
            cooldown: 2000,
            alias: ["s-in"],
            permLevel: 0,
            permission: "READ_MESSAGES"

        })
    }
    
run(message, args) {
    
let { MessageAttachment } = require('discord.js')

let e =  message.attachments.first().url

if(!e) return; 
message.delete()

let a = new MessageAttachment(e)
message.channel.send(a)}}


 module.exports = SayImage