const Discord = require('discord.js');
const client = new Discord.Client()
const cooldown = new Set()


client.on('message', message => {
  if(message.author.bot) return
 let server = message.guild
 if(message.content.startsWith(prefix + 'serverinfo')){
     let embed = new Discord.MessageEmbed()
     .setColor('RANDOM')
    .setTitle("**" + server.name + "**")
  
    .addField('> ', "Server", false)
    .addField('Nombre:', server.name, false)                                                 .addField("> Creador", `\nTag: ${server.owner.user.tag}`  + `\nPing: <@!" + ${server.owner.id} + ">"` + "\n"+ 'Id:', server.owner.id ,true)                                                          
    .addField('Id:', server.id, false)                                                       
    .addField('Region:', server.region, false)
    .addField('Creado el:', server.createdAt, false)
    .addField('> ', "Estadisticas", false)
    .addField(' Nombre: ',  server.name, false)
    .addField(' Bots: ', server.members.cache.filter(m => m.user.bot).size, false )
    .addField(' Emojis: ', server.emojis.cache.size, false)
    .addField(' Canales: ', server.channels.cache.size, false)
    .addField(' Usuarios: ' , "🟢" + server.members.cache.filter(m => m.presence.status === "online").size + " | " +   "🔴" + server.members.cache.filter(m => m.presence.status === "dnd").size + " | " + "🟡" + server.members.cache.filter(m => m.presence.status === "idle").size + " | " + "🌚" + server.members.cache.filter(m => m.presence.status === "online").size, false)
    .addField('> '+ "Roles", true)
    .addField(`${server.roles.cache.map(m => m).join + (" | ")}`)
    .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
    .setThumbnail(server.iconURL())
    message.channel.send(embed)
    }
  });


