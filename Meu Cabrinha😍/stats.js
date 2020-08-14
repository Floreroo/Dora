const Discord = require('discord.js')

module.exports = {
  name: "stats",
  alias: [],
  descripcion: "Las stats del bot",
  run: (client, message, args) => {


     const moment = require('moment')
     require('moment-duration-format')
const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");
let embed = new Discord.MessageEmbed()
.setAuthor(client.user.tag + client.displayAvatarURL)

message.channel.send(embed)
 }
}





