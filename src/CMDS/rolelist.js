const Discord = require('discord.js')


 module.exports = {
     nombre: "rolelist",
     alias: ["r-l"],
     run: (client, message, args) => {

        let roles =  message.guild.roles.cache.filter(x => !x.managed).map(x => x).sort((a, b) => b.position - a.position || parseInt(a.id.slice(0, -10)) - parseInt(b.id.slice(0, -10)) || parseInt(a.id.slice(10)) - parseInt(b.id.slice(10)).first(2)[1]).join("\n")
    const embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .addField("Roles", roles.length > 1000 ? roles.slice(0, 1000)  + "\n Y muchos mas" : roles)
    .setTimestamp()
    .setColor('RANDOM')
    .setFooter("Pedido por: " + message.member.user.tag, message.author.displayAvatarURL())
    message.channel.send(embed)
     }
 }