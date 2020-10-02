const { MessageEmbed } = require("discord.js")

module.exports = {
 name: "send",
 alias: ["ch-s"],
 async run (client, message, args) {

   let box = client.chat.get(message.guild.id) 
    
   if(!box) return message.channel.send("> No hay mensajes en este servidor.")

   let embed = new MessageEmbed()
   .setTitle("Mensajes de este servidor.")
   .addField('Ping',  `\`\`\`diff\n- ${client.ws.ping}ms\`\`\``, true)
  .setDescription(`\`\`\`ini\n${chat.map(x => `[${x.hour}][${x.author}] ${x.chat_message}`).reverse().slice(0, 10).join('\n')}\n\`\`\``)
   message.channel.send(embed).catch(err => message.channel.send(`> ERROR: ${err}`)) 


   
  }
 }