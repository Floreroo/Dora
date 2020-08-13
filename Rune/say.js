const Discord = require('discord.js');
const client = new Discord.Client()
const cooldown = new Set()
 
client.on('message', message => {
    if(message.author.bot) return
     let args = message.content.substring(5) 
       if(message.content.startsWith(prefix +"say")){
              if(!args[0]) return message.channel.send("Pon algo delante de "`${prefix}say`)
              message.channel.send(args);
         message.delete()
            } 
  });
