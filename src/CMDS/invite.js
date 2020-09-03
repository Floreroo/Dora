const Discord = require('discord.js')

const Base = require('../../base/Commands')

class InViTe extends Base {
    constructor(client){
        super(client, {
            name: 'invite',
            description: 'Invitacion al bot/servidor',
            usage: '',
            category: 'Utilidad',
            cooldown: 2000,
            alias: [],
            permLevel: 0,
            permission: "READ_MESSAGES"

        })
    }
    
async run(message, args) {

        const inv = new Discord.MessageEmbed()
        .addField('> Invitaciones', '[Dora La Exploradora](https://discord.com/api/oauth2/authorize?client_id=687102753763229892&permissions=2147483639&scope=bot) ' + ' [Server](https://discord.gg)', true)
        .setColor('RANDOM')
        .setImage( this.client.user.displayAvatarURL({size: 2048, dynamic: true }))
        .setFooter( this.client.user.username, this.client.user.displayAvatarURL())
        message.channel.send(inv)
        
    }
}

module.exports = InViTe