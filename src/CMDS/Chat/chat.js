const { MessageEmbed } = require("discord.js")

module.exports = {
 name: "chat",
 alias: [""],
 async run (client, message, args) {

  const Discord = require('discord.js')
  const chat = client.chat.get(message.guild.id)

  if(!chat) return message.channel.send('> No hay mensajes en este Servidor.')
  .then(m => m.delete( { timeout: 4000 } ))


   let embed = new MessageEmbed()
   .setTitle("Dora Chat")
   .setDescription(`\`\`\`ini\n${chat.map(x => `[${x.hour}][${x.author}] ${x.mensaje}`).reverse().slice(0, 10).join('\n')}\n\`\`\``)
   .setColor("RANDOM")
   .setFooter(message.guild.name, message.guild.iconURL({dynamic: true}))
   message.channel.send(embed).catch(err => message.channel.send(`> ERROR: ${err}`)) 


   
  }
 }

