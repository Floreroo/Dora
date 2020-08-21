const Discord = require('discord.js')

module.exports = {
    nombre: "invite",
    alias: ["inv"],
    run: (client, message, args) => {

        const inv = new Discord.MessageEmbed()
        .addField('> Uy? Alguien me va a invitaaaaaarr!', '[INVITAME](https://discord.com/api/oauth2/authorize?client_id=687102753763229892&permissions=2147483639&scope=bot)', true)
        .setColor('RANDOM')
        .setImage('https://media.tenor.co/videos/2da01072df0ea138658b3630017c51be/mp4')
        .setFooter(message.guild.name, message.guild.iconURL())
        message.channel.send(inv)
        
    }
}