const Discord = require('discord.js');

        module.exports = {
            name: 'avatar',
            description: 'Muestra el avatar de un usuario',
            alias: [],
            async run (client, message, args) {

                const ModelBlack = require('../../database/models/blacklist')

            const poronga = await ModelBlack.findOne({blackID: message.author.id})

            const xdd = client.users.cache.get(poronga)
          
            if([xdd].includes) return message.channel.send("¡Estas en mi blacklist!");
          


              //B
         

        const u = message.mentions.users.first() || client.users.resolve(args[0]) || message.author;
    let embed = new Discord.MessageEmbed()
    .setTitle(`Avatar de ${u.username}`)
    .addField('Links', `[Webp](https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.webp?size=1024)` + " | " + `[Jpg](https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.jpg?size=1024)` + " | " + `[Png](https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.png?size=1024)`)
    .setColor('RANDOM')
    .setImage(u.displayAvatarURL({ size: 2048, dynamic: true }))
    .setFooter(" Pedido por: " + message.member.user.tag, message.author.displayAvatarURL())
     message.channel.send(embed)

     }
    }


  