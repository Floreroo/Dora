const Discord = require('discord.js')
const Client = require('./base/Client')
const ModelWelcome = require("./src/database/models/bienvenidas")
const client = new Client({ config: './config.json',  disableMentions: 'everyone'})
require('dotenv').config()
require('./src/database/index')


client.devs = require('./util/devs')
client.version = "0.5.9"
client.cosas = { Boolean } 
client.pornhub = require('./util/sitios/porn.json')
client.loadCommands(client.config.carpetas.CMDS)
client.loadEvents(client.config.carpetas.EVENTOS)


client.on('guildMemberAdd', async (member) => {
  let i = await ModelWelcome.findOne({ guildID: member.guild.id })
  if(!i) return;
  const channel = member.guild.channels.cache.get(i.channelID)
  if(!channel) return;

  channel.send(`Bienvenid@ ${member} a ${member.guild.name}`)
});
  
client.login(process.env.DISCORD_TOKEN)

 
