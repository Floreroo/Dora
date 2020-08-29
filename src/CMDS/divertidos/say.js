const Discord = require('discord.js');
 
module.exports = {
  nombre: "say",
  alias: [],
  descripcion: "Di algo!",
  run: (client, message, args) => {
              if(!args[0]) return message.channel.send("> Di algo! ")
              message.channel.send(args.join(" "));
         message.delete()
            } 
          }
