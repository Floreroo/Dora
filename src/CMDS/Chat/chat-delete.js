module.exports = {
 name: "chat-delete",
 alias: ["remove-chat", "delete-chat", "ch-d"],
 async run (client, message, args) {
 
    let box = client.chat.get(message.guild.id)

      client.chat.delete(message.guild.id)
      return message.channel.send("> Chat Reseteado.").catch(err => message.channel.send(`> ERROR: ${err}`)) 

 }
}
