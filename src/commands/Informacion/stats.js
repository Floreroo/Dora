const Discord = require("discord.js")
const moment = require("moment")
require("moment-duration-format");


module.exports = {
  name: 'stats',
  description: 'Muesta los stats del bot',
  alias: ["botstats"],
  async run(client, message, args) {

    const embed = new Discord.MessageEmbed()
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addField("UPTIME", `${moment.duration(Date.now() - client.readyTimestamp, "ms").format("d [days], h [hours], m [minutes]")}`, true)
      .addField("NODE.JS", `${process.version}`, true)
      .addField("COMANDOS", client.commands.size, true)
      .addField("CATEGORIAS", "6", true)
      .addField("DISCORD.JS", `${Discord.version}`, true)
      .addField("USUARIOS", client.users.cache.size, true)
      .addField("SERVIDORES", client.guilds.cache.size, true)
      .addField("CANALES", client.channels.cache.size, true)
      .addField("VERSION", client.version, true)
      .setFooter(message.member.user.tag, message.author.displayAvatarURL())
      .setColor('RANDOM')
    message.channel.send(embed)
  }
}
