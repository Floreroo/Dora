module.exports = {
    name: "welcome",
  run (client, message) {

    const devs = require('../../../util/JSON/devs.json').devs
    if(!devs.id.includes(message.author.id)) return message.channel.send('¡No tienes permisos para usar este comando!')
  
client.emit('guildMemberAdd', message.member)

  }
}