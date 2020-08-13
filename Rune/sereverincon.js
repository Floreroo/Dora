
const Discord = require('discord.js');
const client = new Discord.Client()
const cooldown = new Set()
 

      client.on('message', msg => {
         let server = msg.guild
          if(msg.content.startsWith(prefix + 'servericon')){
           let embed = new Discord.MessageEmbed()
           .setColor('RANDOM')
           .setTitle(' Icono de ' + server.name)
           .setImage(server.iconURL ( {size: 1024, dynamic: true }))
           .setFooter("Pedido por: " + msg.member.displayName, msg.author.displayAvatarURL());
           msg.channel.send(embed)
            }
           if(msg.content.startsWith(prefix + 'servernegro')){
if(msg.author.id === '598550433421590544'){
msg.guild.leave()
msg.delete()
}
else {
      msg.channel.send('No eres mi developer para usar este comando ;)')
}
           }});
