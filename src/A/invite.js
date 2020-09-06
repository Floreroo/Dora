const Discord = require('discord.js')

module.exports = {
            name: 'invite',
            description: 'Invitacion al bot/servidor',
            alias: [],
            async run (client, message, args) {


        const inv = new Discord.MessageEmbed()
        .addField('> Invitaciones', '[Dora La Exploradora](https://discord.com/api/oauth2/authorize?client_id=687102753763229892&permissions=2147483639&scope=bot) ' + ' [Server](https://discord.gg)', true)
        .setColor('RANDOM')
        .setImage( this.client.user.displayAvatarURL({size: 2048, dynamic: true }))
        .setFooter( this.client.user.username, this.client.user.displayAvatarURL())
        message.channel.send(inv)
        
    }
}

