const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "snipe",
    description: "Muestra el ultimo mensaje eliminado",
    alias: [],
  run (client, message, args) {

    const channel = message.mentions.channels.first() || client.channels.resolve(args[0]) || message.channel;
    const snipe =  client.snipes.get(channel.id)
if(!snipe) return message.chanel.send("Ultimamante no hay mensajes eliminados en"+channel.toString())
    let embed = new MessageEmbed()
    .setAuthor(snipe.member.tag, snipe.member.displayAvtarURL())
    .addField("Miembro", snipe.member.toString(), true)
    .addField("Canal", snipe.channel, true)
    .addField("Mensaje", snipe.message, true)
    .setColor(snipe.member.hexColor)
    message.channel.send(embed)


  }
}