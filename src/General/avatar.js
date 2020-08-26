const Discord = require('discord.js');
module.exports = {
    nombre: "avatar",
    alias: [],
    cooldown: 2,
    run: (client, message, args) => {
    
 
    let u = message.mentions.members.first() || client.users.cache.get(args[0])|| message.author
    let embed = new Discord.MessageEmbed()
    .setTitle(`Avatar de ${u.username}`)
    .addField('Links', `[Webp](https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.webp?size=1024)` + " | " + `[Jpg](https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.jpg?size=1024)` + " | " + `[Png](https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.png?size=1024)`)
    .setColor('RANDOM')
    .setImage(u.displayAvatarURL({ size: 2048, dynamic: true }))
    .setFooter(" Pedido por: " + message.member.user.tag, message.author.displayAvatarURL())
     message.channel.send(embed)

     }
    }