const Discord = require('discord.js')

module.exports = {
            name: 'invite',
            description: 'Invitacion al bot/servidor',
            alias: [],
            async run (client, message, args) {

                const ModelBlack = require('../../database/models/blacklist')

            const poronga = await ModelBlack.findOne({blackID: message.author.id})

            const xdd = client.users.cache.get(poronga)
          
            if([xdd].includes) return message.channel.send("¡Estas en mi blacklist!");
          


              //B
            
            
        const inv = new Discord.MessageEmbed()
        .addField('> Invitaciones', '[Dora La Exploradora](https://discord.com/api/oauth2/authorize?client_id=752529751943544902&permissions=2147483639&scope=bot) ' + ' \n[Servidor De Soporte](https://discord.gg/EXyn6yU)', true)
        .setColor('RANDOM')
        .setFooter(client.user.username, client.user.displayAvatarURL())
        message.channel.send(inv)
    
    }
}

