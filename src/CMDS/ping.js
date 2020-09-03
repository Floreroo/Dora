const Discord = require('discord.js');
const Base = require('../../base/Commands')

class PiNg extends Base {
    constructor(client){
        super(client, {
            name: '',
            description: '',
            usage: '',
            category: '',
            cooldown: 2000,
            alias: [],
            permLevel: 0,
            permission: "READ_MESSAGES"

        })
    }
    
run(message, args) {
    message.channel.send('🏓 Pong!').then(m => {
      let embed = new Discord.MessageEmbed()
    .setDescription(`Envio de mensajes: \*\*${m.createdTimestamp - message.createdTimestamp} ms\*\*\nDiscordAPI: \*\*${client.ws.ping}ms\*\*`)
    .setColor('RANDOM')
  message.channel.send(embed)
  
  

    })
}
 }

  module.exports = PiNg
