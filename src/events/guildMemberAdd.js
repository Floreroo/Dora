module.exports = async (client, member) => {

  const ModelWelcome = require("../database/models/bienvenidas")
  const El_Canvas = require("canvas")
  const Discord = require('discord.js')
  let i = await ModelWelcome.findOne({ guildID: member.guild.id })
  if(!i) return;
  const channel = member.guild.channels.cache.get(i.channelID)
  if(!channel) return;

  channel.send(`Bienvenido ${member} a ${member.guild.name}`)
}
 