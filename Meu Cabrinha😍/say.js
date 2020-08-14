const Discord = require('discord.js');
 
module.exports = {
  name: "say",
  alias: [],
  descripcion: "Di algo!",
  run: (client, message, args) => {
              if(!args[0]) return message.channel.send("> Di algo! ")
              message.channel.send(args[0]);
         message.delete()
            } 
          }
