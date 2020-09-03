
const Discord = require('discord.js');
const Base = require('../../base/Commands');


class servericon extends Base {
    constructor(client){
        super(client, {
            name: 'icon',
            description: 'Muestra el avatar del servidor.',
            usage: '',
            category: 'Utilidad',
            cooldown: 2000,
            alias: ["s-ic"],
            permLevel: 0,
            permission: "READ_MESSAGES"

        })
    }
    
run(message, args) {

         let server = message.guild
           let embed = new Discord.MessageEmbed()
           .setColor('RANDOM')
           .setTitle(' Icono de ' + server.name)
           .setImage(server.iconURL( {size: 1024, dynamic: true }))
           .setFooter("Pedido por: " + message.member.user.tag, message.author.displayAvatarURL());
           message.channel.send(embed)
            }
      }

      module.exports = servericon