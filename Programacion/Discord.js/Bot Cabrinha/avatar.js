const Discord = require('discord.js');


module.exports = {
    nombre: "avatar",
    alias: [],
    run: (client, message, args) => {
     
    let u = message.mentions.members.first() || message.member
    let embed = new Discord.MessageEmbed()
    .setTitle(`Avatar de ${u.user.tag}`)
    .addField('Links', `[Webp](https://cdn.discordapp.com/avatars/${u.id}/84030222b2fcf38109343724ba83fc11.webp?size=2048)` + " | " + `[Jpg](https://cdn.discordapp.com/avatars/${u.id}/84030222b2fcf38109343724ba83fc11.jpg?size=2048)` + " | " + `[Png](https://cdn.discordapp.com/avatars/${u.id}/84030222b2fcf38109343724ba83fc11.png?size=2048)`, true)
    .setColor('RANDOM')
    .setImage(u.user.displayAvatarURL({ size: 2048, dynamic: true }))
    .setFooter(" Pedido por: " + message.member.user.tag, message.author.displayAvatarURL())
     message.channel.send(embed)


    }
}