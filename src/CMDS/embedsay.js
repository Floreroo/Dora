const Discord = require('discord.js');
const { descripcion } = require('./say');
const { title } = require('process');
 
module.exports = {
  nombre: "embedsay",
  alias: ["esay"],
  cooldown: 0,
  run: (client, message, args) => {

    if(!args[0]) return message.channel.send("> Di algo! ")
            
    let embed = new Discord.MessageEmbed()
    .setDescription(args.join(" "),  {disableMentions: 'all'})
    .setColor("RANDOM")
    message.channel.send(embed);
         message.delete()
            } 
          }
