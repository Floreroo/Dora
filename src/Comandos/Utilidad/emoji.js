const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "emoji",
    alias: ["jumbo"],
    description: "A",
    run (client, message, args) {

        let emoji = client.emojis.resolve(args[0]) || client.emojis.cache.find(c => c.name === args[0]);

        let embed = MessageEmbed()
       .setTitle(`${emoji.name}`)
        .addField("Id", emoji.id, true)
        .addField("Url", `[URL](${emoji.url})`, true)
        .adddField("Animado?", emoji.animated ? "Si" : "No", true)
        message.channel.send(embed)
        
    }
}