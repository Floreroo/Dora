
const Discord = require('discord.js');

   module.exports = {
            name: 'icon',
            description: 'Muestra el avatar del servidor.',
            alias: ["s-ic"],
          async  run (client, message, args) {

               const ModelBlack = require('../../database/models/blacklist')

            const poronga = await ModelBlack.findOne({blackID: message.author.id})

            const xdd = client.users.cache.get(poronga)
          
            if([xdd].includes) return message.channel.send("¡Estas en mi blacklist!");
          


             //B
                      

         let server = message.guild
           let embed = new Discord.MessageEmbed()
           .setColor('RANDOM')
           .setTitle(' Icono de ' + server.name)
           .setImage(server.iconURL( {size: 1024, dynamic: true }))
           .setFooter("Pedido por: " + message.member.user.tag, message.author.displayAvatarURL());
           message.channel.send(embed)
            }
      }

      