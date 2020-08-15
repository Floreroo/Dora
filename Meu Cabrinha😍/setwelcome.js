const Discord = require('discord.js')
const db = require('megadb');
let welcome_db = new db.crearDB('setwelcome')

module.exports = {
  nombre: "setwelcome",
  alias: [],
  run: (client, message, args) => {

    var canal_welcome = message.mentions.channels.first()
    if(!canal_welcome) return message.channel.send('> Debes mencionar un canal')
    let msgb = args.slice(1).join(" ")
  if(!msgb) return message.channel.send("> Debes poner algun texto de bienvienida")
    welcome_db.establecer(`${message.guild.id}`, {texto: msgb, canal: canal_welcome})
  message.channel.send("> Canal y mensaje establecidos.")

  }
 }