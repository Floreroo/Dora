const Discord = require('discord.js');

module.exports = {
    nombre: "help",
    alias: ["comandos"],
    descripcion: "Los comandos del bot",
    run: (client, message, args) => {
    

        let embed2 = new Discord.MessageEmbed()
        .setAuthor(message.member.user.tag, message.author.displayAvatarURL())  
        .addField('Comandos', "⚙Configuracion" + "\n 😂Diversion" + "\n 🔋Utilidad", true)
        .setColor('RANDOM')


       
        message.channel.send("Cargando emojis...").then(m => {
        setTimeout(() => {
        m.edit(embed2)
    }, 4000)
        
           

        m.react('⚙')
        m.react('🤣')
        m.react('🔋')
        m.react('❌')

             m.awaitReactions(
              async (reaction, user) => {
                await reaction.users.remove(message.author.id);
                
                    if (message.author.id !== user.id) return;
                   if (reaction.emoji.name === '⚙') { 
                    let embed3 = new Discord.MessageEmbed()
                    .addField("Comandos de configuracion", "`setprefix`, `setwelcome`")
                    .setColor('RANDOM')
                    m.edit(embed3)
                    }

                  if (reaction.emoji.name === '😂') { 
                    let embed4 = new Discord.MessageEmbed()
                    .setTitle('Comandos de diversion')
                    .setColor('RANDOM')
                    m.edit(embed4)  
                  }


                 if (reaction.emoji.name === '🔋') { 
                     let embed5 = new Discord.MessageEmbed()
                     .addField("Comandos de utilidad", "`setprefix`, `setlang`, `clear`, `afk`, `invite`, `say`, `esay`")
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