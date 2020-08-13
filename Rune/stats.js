const Discord = require('discord.js')

module.exports = {
  name: "stats",
  alias: [],
  descripcion: "Las stats del bot",
  run: (client, message, args) => {


     const moment = require('moment')
     require('moment-duration-format');
     let kasake = client.users.cache.get("598550433421590544")
const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");
let embed = new Discord.MessageEmbed()
.setAuthor(client.user.tag + client.user.displayAvatarURL)
.addField('<:VerifiedBotDeveloper:730664032591413299> | **Developer**', "Srto Kasake#9538")
.addField('<a:Cargando2:729507466286596106> | **Ayudantes**', 'undefined xd')
.addField(' <:server:730679464035483748> | **Servers** ', client.guilds.cache.size)
.addField('<:AH:729781279519801461> | **Usuarios**', client.users.cache.size)
.addField('<:heroko:732602351952723978> | **Host**', "Heroku")
.addField(` <:ram:730677872699899925> | **Memoria** `,`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
.addField(`<:reloj:730684244677885952> | **Uptime**`, `${actividad}`)
.addField('<:JS:730662962267947069> | **Discord.js**', "v12.2.0")
.setFooter('• Srto Kasake#9538', kasake.displayAvatarURL())
.setImage('https://media.discordapp.net/attachments/632098744262721564/633640689955110912/nitro.gif')
.setColor('RANDOM')
.setThumbnail(client.user.displayAvatarURL())
message.channel.send(embed)
 }
}





