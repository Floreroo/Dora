const Discord = require('discord.js');
const { descripcion } = require('./say');
const { title } = require('process');
const Base = require('../../base/Commands')

class esay extends Base {
    constructor(client){
        super(client, {
            name: 'embedsay',
            description: 'Di algo!',
            usage: 'embedsay <texto>',
            category: 'Diversion',
            cooldown: 2000,
            alias: ["esay"],
            permLevel: 0,
            permission: "READ_MESSAGES"

        })
    }
    
run(message, args) {
    if(!args[0]) return message.channel.send("> Di algo! ")
            
    let embed = new Discord.MessageEmbed()
    .setDescription(args.join(" "),  {disableMentions: 'all'})
    .setColor("RANDOM")
    message.channel.send(embed);
         message.delete()
            } 
          }


          module.exports = esay
          