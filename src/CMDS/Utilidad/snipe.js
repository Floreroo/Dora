const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "snipe",
    description: "Muestra el ultimo mensaje eliminado",
    alias: [],
  async run (client, message, args) {

   //A

  //B


    const channel = message.mentions.channels.first() || client.channels.resolve(args[0]) || message.channel;
    const snipe =  client.snipes.get(channel.id)
if(!snipe) return message.channel.send("Ultimamante no hay mensajes eliminados en "+channel.toString())
    let embed = new MessageEmbed()
    .addField("Miembro", snipe.member)
    .addField("Canal", snipe.channel)
    .addField("Mensaje", snipe.message)
    .setColor("RANDOM")
    message.channel.send(embed)


  }
}