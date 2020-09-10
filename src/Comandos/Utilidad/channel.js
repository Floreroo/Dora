const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: "channel",
    alias: ["c-i", "channelinfo"],
    async run (client, message, args) {

        const { MessageEmbed } = require('discord.js')

    let a = message.mentions.channels.first() || message.guild.channels.resolve(args[0]) || message.channel;

    let embed = new MessageEmbed()
    .setTitle("Informacion de "+ a.name, true)
    .addField("Tipo", a.type, true)
    .addField("Id", a.id, true)
    .addField("Posicion", a.rawPosition, true)
    .addField("Categoria", a.parent.name, true)
    .addField("Creado el", a.createdAt.toDateString(), true)
    .addField("Nsfw?", a.nsfw ? "Si" : "No", true)
    if(a.lastMessage){
    embed.addField("Ultimo mensaje", `\`\`${a.lastMessage.content}\`\`` + "\n" + `[URL](${a.lastMessage.url})`, true)
    }
    embed.addField("Topic", a.topic ? a.topic : "No tiene", true)
    .addField("SlowMode", a.rateLimitPerUser + "sec", true)
    .setColor("RANDOM")
    .setFooter("UTILIDAD", message.guild.iconURL())
    message.channel.send(embed)

    }
}