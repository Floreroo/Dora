const { MessageEmbed } = require("discord.js")

module.exports = {
 name: "noticias",
 alias: ["kasake el reportero"],
 run (client, message, args) {

      let kasake = client.users.cache.get(client.devs.id[0])

          let embed = new MessageEmbed()
          .setAuthor(kasake.tag, kasake.displayAvatarURL({ dynamic: true }))
          .setDescription("No hay noticias ultimamente", true)
          .setColor("RANDOM")
          .setFooter("INFORMACION", message.guild.iconURL({ dynamic: true }))
          message.channel.send(embed)
 }
}