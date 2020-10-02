module.exports = {
 name: "chat",
 alias: ["ch"],
 async run (client, message, args) {
    
   let box = client.chat.get(message.guild.id)  
   if(!args[0]) return message.channel.send("> Debes enviar un mensaje.")
   if(['discord.gg', 'https://discord.gg/'].some(link => message.content.toLowerCase().includes(link))) {

   if(message.deletable) message.delete()
   return message.channel.send("> No puedes hacer spam en el chat!")
   }

   if(['```', '`'].some(joda => message.content.toLowerCase().includes(joda))) {
   return message.channel.send("> ERROR: RangeError \`\`[MESSAGE_CONTENT_RANGE]\`\`")
   }
 
   
   if(!client.chat.has(message.guild.id)) client.chat.set(message.guild.id, [])
   box.push({author: message.author.tag, chat_message: args.join(' '), hour: message.createdAt.toLocaleString("es")})

   message.channel.send("> Mensaje Enviado.")
 }
}