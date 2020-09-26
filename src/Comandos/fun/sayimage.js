
    module.exports = {
            name: 'sayimage',
            description: 'Pon algo!',
            alias: ["s-im"],
         async run (client, message, args) {

            const ModelBlack = require('../../database/models/blacklist')

            const poronga = await ModelBlack.findOne({blackID: message.author.id})

            const xdd = client.users.cache.get(poronga)
          
            if([xdd].includes) return message.channel.send("¡Estas en mi blacklist!");
          


              //B
            
            
let { MessageAttachment } = require('discord.js')

let e =  args[0] || message.attachments.first().url

if(!e) return; 
message.delete()

let a = new MessageAttachment(e)
message.channel.send(a)
message.delete()
            }
        }

