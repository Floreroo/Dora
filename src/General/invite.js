const Discord = require('discord.js')

module.exports = {
    nombre: "invite",
    alias: ["inv"],
    run: (client, message, args) => {

        const inv = new Discord.MessageEmbed()
        .addField('> Me vas a...', '[Invitaaaar??](https://discord.com/api/oauth2/authorize?client_id=687102753763229892&permissions=2147483639&scope=bot)', true)
        .setColor('RANDOM')
        .setImage(client.user.displayAvatarURL({size: 2048, dynamic: true }))
        .setFooter(client.user.username, client.user.displayAvatarURL())
        message.channel.send(inv)
        
    }
}