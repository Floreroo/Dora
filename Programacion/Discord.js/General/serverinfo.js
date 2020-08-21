const Discord = require('discord.js');

module.exports = {
  nombre: "server",
   alias: [],
   descripcion: "Muestra la informacion de un servidor",
   run: (client, message, args) => {


 let server = message.guild
     let embed = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setAuthor(server.displayName + server.iconURL())
    .addField(' Usuarios: ', "<a:online:733410559965265921>" + server.members.cache.filter(m => m.presence.status === "online").size + "<a:dnd:733410068367671360>" + server.members.cache.filter(m => m.presence.status === "dnd").size + "<a:idle:733410335091851327>" + server.members.cache.filter(m => m.presence.status === "idle").size + "<a:offline:733410777599442964>" + server.members.cache.filter(m => m.presence.status === "offline").size, true)
    .addField(`${server.roles.cache.map(m => m.toString)}`)
    .setThumbnail(server.iconURL())
    message.channel.send(embed)
    }
  }


