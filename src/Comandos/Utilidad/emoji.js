const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "emoji",
    alias: ["emojiinfo", "jumbo"],
    async run (client, message, args) {

       //A

      //B
        

        if(!args[0]) return message.channel.send('Debes poner un emoji!')

        const emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1]) ||  message.guild.emojis.cache.find(x => x.id === args[0]) || message.guild.emojis.cache.find(c => c.name === args[0])
        
        try{
        let embed = new MessageEmbed()
        .addField("Id", emoji.id, true)
        .addField("Nombre", `\*\*${emoji.name}\*\*`, true)
        .addField("Referencia",  `\`\`<:${emoji.name}:${emoji.id}>\`\``, true)
        .addField("Creado el", emoji.createdAt.toLocaleString("es"), true)
        .addField("URL", `[Emoji URL](${emoji.url})`, true)
        .setImage(emoji.url)
        .setColor('RANDOM')
        message.channel.send(embed)
     
} catch(kasakeerror) {
    message.channel.send("No se encontro el emoji seleccionado")
}

    }
}