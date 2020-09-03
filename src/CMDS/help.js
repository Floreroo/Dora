const Discord = require('discord.js');

const Base = require('../../base/Commands')

class help extends Base {
    constructor(client){
        super(client, {
            name: 'help',
            description: 'Comando de informacion',
            usage: 'help',
            category: 'Informacion',
            cooldown: 2000,
            alias: ["comandos"],
            permLevel: 0,
            permission: "READ_MESSAGES"

        })
    }
    
run(message, args) {
      

        let embed2 = new Discord.MessageEmbed()
        .setAuthor('INFORMACION', message.guild.iconURL())
        .setFooter(message.member.user.tag, message.author.displayAvatarURL())  
        .addField('Escoje uno \n \n \n \n', "⚙ Configuracion\n" + "\n 😂 Diversion\n" + "\n 🔋 Utilidad", true)
        .setColor('RANDOM')

        
       let c = new Discord.MessageEmbed()
       .setAuthor('INFORMACION', message.guild.iconURL())
       .setFooter(message.member.user.tag, message.author.displayAvatarURL())
       .setDescription('Espere un segundito...')  
       .setColor("RANDOM")
        message.channel.send(c).then(m => {
        setTimeout(() => {
        m.edit(embed2)
    }, 4000)
        
           

        m.react('⚙')
        m.react('😂')
        m.react('🔋')
        m.react('❌')

             m.awaitReactions(
              async (reaction, user) => {
                await reaction.users.remove(message.author.id);
                
                    if (message.author.id !== user.id) return;
                   if (reaction.emoji.name === '⚙') { 
                    let embed3 = new Discord.MessageEmbed()
                    .addField("Configuracion", "`setprefix`, `setwelcome`")
                    .setColor('RANDOM')
                    m.edit(embed3)
                    }

                  if (reaction.emoji.name === '😂') { 
                    let embed4 = new Discord.MessageEmbed()
                    .addField("Diversion", "`8ball`, `say` `sayimage`")
                    .setColor('RANDOM')
                    m.edit(embed4)  
                  }


                 if (reaction.emoji.name === '🔋') { 
                     let embed5 = new Discord.MessageEmbed()
                    .addField("Utilidad",  "`avatar`  `botinvite`  `ping`  `server`  `user`  `rolelist`  `stats`")
                    .setColor('RANDOM')
                     m.edit(embed5)
                }


                if (reaction.emoji.name === '❌') { 
                    m.delete()
            }

            });
    });

    } 
}

   module.exports = help