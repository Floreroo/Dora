const Discord = require('discord.js');
 
const Base = require('../../base/Commands')

class SaY extends Base {
    constructor(client){
        super(client, {
            name: 'say',
            description: 'Di algo!',
            usage: 'say <texto>',
            category: 'Diversion',
            cooldown: 2000,
            alias: [],
            permLevel: 0,
            permission: "READ_MESSAGES"

        })
    }
    
run(message, args) { 

              if(!args[0]) return message.channel.send("> Di algo! ")
              message.channel.send(args.join(" "),  {disableMentions: 'all'});
         message.delete()
            } 
          }


          module.exports = SaY