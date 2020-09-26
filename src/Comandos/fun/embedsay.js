const Discord = require('discord.js');

module.exports = {
            name: 'embedsay',
            description: 'Di algo!',
            alias: ["esay"],
          async  run (client, message, args) {

              const ModelBlack = require('../../database/models/blacklist')

            const poronga = await ModelBlack.findOne({blackID: message.author.id})

            const xdd = client.users.cache.get(poronga)
          
            if([xdd].includes) return message.channel.send("¡Estas en mi blacklist!");
          


            //B
          
          
    if(!args[0]) return message.channel.send("> Di algo! ")
            
    let embed = new Discord.MessageEmbed()
    .setDescription(args.join(" "),  {disableMentions: 'all'})
    .setColor("RANDOM")
    message.channel.send(embed);
         message.delete()
            } 
          }


        
          