const Discord = require('discord.js');

const Base = require('../../base/Commands')

class avatar extends Base {
    constructor(client){
        super(client, {
            name: 'avatar',
            description: 'Muestra el avatar de un usuario',
            usage: 'Avatar <Mencion/Id>',
            category: 'Utilidad',
            cooldown: 2000,
            alias: [],
            permLevel: 0,
            permission: "READ_MESSAGES"

        })
    }
    
run(message, args) {
 
        const u = message.mentions.users.first() || this.client.users.resolve(args[0]) || message.author;
    let embed = new Discord.MessageEmbed()
    .setTitle(`Avatar de ${u.username}`)
    .addField('Links', `[Webp](https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.webp?size=1024)` + " | " + `[Jpg](https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.jpg?size=1024)` + " | " + `[Png](https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.png?size=1024)`)
    .setColor('RANDOM')
    .setImage(u.displayAvatarURL({ size: 2048, dynamic: true }))
    .setFooter(" Pedido por: " + message.member.user.tag, message.author.displayAvatarURL())
     message.channel.send(embed)

     }
    }


    module.exports = avatar