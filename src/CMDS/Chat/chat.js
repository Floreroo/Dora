const { MessageEmbed } = require("discord.js")

module.exports = {
 name: "chat",
 alias: [""],
 async run (client, message, args) {

  const Discord = require('discord.js')
  const chat = client.chat.get(message.guild.id)

  if(!chat) return message.channel.send('> No hay mensajes en este Servidor.')
  .then(m => m.delete( { timeout: 4000 } ))

  if(client.chat.get(message.guild.id).map(mensaje => mensaje.mensaje).join(' ').length > 2000) {
      client.chat.delete(message.guild.id)
      return message.channel.send('> Chat Reseteado.')
  }

   let embed = new MessageEmbed()
   .setTitle("Dora Chat")
   .setFooter(`Ping ${client.ws.ping}ms`, true)
   .setDescription(`\`\`\`ini\n${chat.map(x => `[${x.hour}][${x.author}] ${x.chat_message}`).reverse().slice(0, 10).join('\n')}\n\`\`\``)
   .setColor("RANDOM")
   message.channel.send(embed).catch(err => message.channel.send(`> ERROR: ${err}`)) 


   
  }
 }

