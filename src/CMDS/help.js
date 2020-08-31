const Discord = require('discord.js');

module.exports = {
    nombre: "help",
    alias: ["comandos"],
    descripcion: "Los comandos del bot",
    run: (client, message, args) => {
    
        if (!["534951970310586378", "598550433421590544"].includes(message.author.id)) return
        let embed2 = new Discord.MessageEmbed()
        .setFooter("COMANDOS", client.user.displayAvatarURL())    
        .addField('⚙',  "Configuracion", true)
        .addField('🤣', "Divertidos", true )
        .addField('🚗' + "Utilidad")
        .setColor('RANDOM')


        let embed1 = new Discord.MessageEmbed()
        .setFooter("COMANDOS", client.user.displayAvatarURL())  
        .setDescription('Espere un segundito...') 
        .setColor('RANDOM')
        message.channel.send(embed1).then(m => {
        setTimeout(() => {
        m.edit(embed2)
    }, 4000)
        
           

        m.react('⚙')
        m.react('🤣')
        m.react('ℹ')
        m.react('🚗')
        m.react('❌')

             m.awaitReactions(
              async (reaction, user) => {
                await reaction.users.remove(message.author.id);
                
                    if (message.author.id !== user.id) return;
                   if (reaction.emoji.name === '⚙') { 
                    let embed3 = new Discord.MessageEmbed()
                    .setTitle('Comandos de configuracion')
                    .setColor('BLUE')
                    m.edit(embed3)
                    }

                  if (reaction.emoji.name === '🤣') { 
                    let embed4 = new Discord.MessageEmbed()
                    .setTitle('Comandos de diversion')
                    .setColor('BLUE')
                    m.edit(embed4)  
                  }
  
                  if (reaction.emoji.name === 'ℹ') {
                    let embed5 = new Discord.MessageEmbed()
                    .setTitle('Comandos de Informacion')
                   .setColor('BLUE')
                    m.edit(embed5) 
                  }


                 if (reaction.emoji.name === '🚗') { 
                     let embed5 = new Discord.MessageEmbed()
                     .setTitle('Comandos de utilidad')
                    .setColor('BLUE')
                     m.edit(embed5)
                }

                if (reaction.emoji.name === '❌') { 
                    m.delete()
            }

            });
    });

    } 
}