const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "emojiinfo",
    alias: ["emoji"],
    async run (client, message, args) {

        let emoji = client.emojis.cache.get(args[0]) || client.emojis.cache.find(e => e.name === args[0]);

        let embed = new MessageEmbed()
        .setAuthor(emoji.auhor.name, emoji.author.displayAvatarURL())
        .addField("Id", emoji.id, true)

    }
}