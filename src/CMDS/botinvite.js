const Discord = require('discord.js');

const Base = require('../../base/Commands')

class botinvite extends Base {
    constructor(client){
        super(client, {
            name: 'botinvite',
            description: 'Invita a un bot.',
            usage: 'botinvite <Mencion/Id>',
            category: 'Utilidad',
            cooldown: 2000,
            alias: ["b-i"],
            permLevel: 0,
            permission: "READ_MESSAGES"

        })
    }
    
run(message, args) {

        const u = message.mentions.users.first() || this.client.users.resolve(args[0]);
        if(!args[0]) return  message.channel.send('Debes poner la id del bot al que quieras invitar')
         if(!u.bot) return message.channel.send('Solo puedes invitar a los bots')
        const embed = new Discord.MessageEmbed()
        .addField(`Invitar a ${u.tag}`, `¡Aqui tienes la [invitacion](https://discord.com/api/oauth2/authorize?client_id=${u.id}&permissions=8&scope=bot) de **${u.username}** recien salida del horno, cuidado que quema!`)
        .setImage(u.displayAvatarURL({format: "png", size: 2048, dynamic: true}))
        .setColor('RANDOM')
        .setFooter(" Pedido por: " + message.member.user.tag, message.author.displayAvatarURL())
        message.channel.send(embed)

       
         
        
      
         
    
     }
    }


 module.exports = botinvite