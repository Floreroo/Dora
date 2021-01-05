const {
  Model
} = require('mongoose')

module.exports = async (client, message, server) => {

  const Discord = require('discord.js')
  const {
    ModelPrefix
  } = require('../database/models/Prefix')
  let canal = client.channels.cache.find(c => c.name === "「📣」server-leave")
  if (!canal) return

  let region = {
    europe: "Europa :flag_eu:",
    brazil: "Brasil :flag_br: ",
    hongkong: "Hong Kong :flag_hk:",
    japan: "Japón :flag_jp:",
    russia: "Rusia :flag_ru:",
    singapore: "Singapur :flag_sg:",
    southafrica: "Sudáfrica :flag_za:",
    sydney: "Sydney :flag_au:",
    "us-central": "Central US :flag_us:",
    "us-east": "Este US :flag_us:",
    "us-south": "Sur US :flag_us:",
    "us-west": "Oeste US :flag_us:",
    "vip-us-east": "VIP US Este :flag_us:",
    "eu-central": "Europa Central :flag_eu:",
    "eu-west": "Europa Oeste :flag_eu:",
    london: "London :flag_gb:",
    amsterdam: "Amsterdam :flag_nl:",
    india: "India :flag_in:"
  }

  let embed = new Discord.MessageEmbed()
    .setAuthor(server.name, server.iconURL())
    .setThumbnail(server.iconURL())
    .addField('ID', server.id, true)
    .addField('Owner', server.owner.user.tag, true)
  embed.addField('Canales(Total)', server.channels.cache.size, true)
    .addField('Region', `${region[server.region]}`, true)
    .addField("Server Count", client.guilds.cache.size, true)
    .setColor("RANDOM")
  canal.send(embed)

  await ModelPrefix.deleteOne({
    guildId: server.id
  })
}
