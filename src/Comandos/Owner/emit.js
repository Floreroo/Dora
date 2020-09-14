module.exports = {
    name: "welcome",
  run (client, message) {

    if(!client.devs.id.includes(message.author.id)) return message.channel.send('¡No tienes permisos para usar este comando!')
  
client.emit('guildMemberAdd', message.guild.members.resolve(args[0]) || message.mentions.users.first() || message.member)

  }
} 

