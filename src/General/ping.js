const Discord = require('discord.js');
 module.exports = {
  nombre: "ping",
  alias: [],
  descripcion: "Te dice el ping",
  run: (client, message, args) => {

  
    message.channel.send('🏓 Pong!').then(m => {
      let embed = new Discord.MessageEmbed()
    .setDescription(`Envio de mensajes: \*\*${m.createdTimestamp - message.createdTimestamp} ms\*\*\nDiscordAPI: \*\*${client.ws.ping}ms\*\*`)
    .setColor('RANDOM')
  message.channel.send(embed)
  
  

    })
}
 }
