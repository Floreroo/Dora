const Discord = require('discord.js')

module.exports = {
            name: 'invite',
            description: 'Invitacion al bot/servidor',
            alias: [],
            async run (client, message, args) {


        const inv = new Discord.MessageEmbed()
        .addField('> Invitaciones', '[Dora La Exploradora](https://discord.com/api/oauth2/authorize?client_id=687102753763229892&permissions=2147483639&scope=bot) ' + ' \n[Servidor De Soporte](https://discord.gg/DNSzKHH)', true)
        .setColor('RANDOM')
        .setFooter(client.user.username, client.user.displayAvatarURL())
        message.channel.send(inv)
        
    }
}

