const Discord = require('discord.js');
 
   module.exports = {
            name: 'say',
            description: 'Di algo!',
            alias: [],
           async run (client, message, args) {

            const ModelBlack = require('../../database/models/blacklist')

            const poronga = await ModelBlack.findOne({blackID: message.author.id})

            const xdd = client.users.cache.get(poronga)
          
            if([xdd].includes) return message.channel.send("¡Estas en mi blacklist!");
          


          //B
        
        
              if(!args[0]) return message.channel.send("> Di algo! ")
              message.channel.send(args.join(" "),  {disableMentions: 'all'});
         message.delete()
            } 
          }


    