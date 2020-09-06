const Discord = require('discord.js');
 
   module.exports = {
            name: 'say',
            description: 'Di algo!',
            alias: [],
           run: (client, message, args) => {

              if(!args[0]) return message.channel.send("> Di algo! ")
              message.channel.send(args.join(" "),  {disableMentions: 'all'});
         message.delete()
            } 
          }


    