const Discord = require('discord.js');
const { format } = require('path');


module.exports = {
    nombre: "avatar",
    alias: [],
    run: (client, message, args) => {
    
 
    let u = message.mentions.members.first() || client.users.resolve(args[0])|| message.member
    let embed = new Discord.MessageEmbed()
    .setTitle(`Avatar de ${u.tag}`)
    .addField('Links', `[Webp](https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.webp?size=1024)` + " | " + `[Jpg](https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.jpg?size=1024)` + " | " + `[Png](https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.png?size=1024)`)
    .setColor('RANDOM')
    .setImage(u.displayAvatarURL({ size: 2048, dynamic: true }))
    .setFooter(" Pedido por: " + message.member.user.tag, message.author.displayAvatarURL())
     message.channel.send(embed)

     }
    }