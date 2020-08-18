const Discord = require('discord.js');

module.exports = {
    nombre: "comandos",
    alias: ["commands"],
    descripcion: "Los comandos del bot",
    run: (client, message, args) => {
    
        if (!["534951970310586378", "598550433421590544"].includes(message.author.id)) return
        let embed2 = new Discord.MessageEmbed()
        .setFooter("COMANDOS", client.user.displayAvatarURL())    
        .addField('⚙', "Configuracion", true)
        .addField('🔎', "Informativos", true)
        .addField('🔌', "Utilidad", true)
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
        m.react('🔎')
        m.react('🔌')
        m.react('❌')

             m.awaitReactions((reaction, user) => { 
                    if (message.author.id !== user.id) return;
                   if (reaction.emoji.name === '⚙') { 
                    reaction.remove(user)
                    let embed3 = new Discord.MessageEmbed()
                    
                    m.edit(embed3)
                    }

                  if (reaction.emoji.name === '🔎') { 
                    reaction.remove(user)
                    let embed4 = new Discord.MessageEmbed()
                    m.edit(embed4)  
                  }

                 if (reaction.emoji.name === '🔌') { 
                    reaction.remove(user)
                     let embed5 = new Discord.MessageEmbed()
                     m.edit(embed5)
                }

                if (reaction.emoji.name === '❌') {
                    
                    m.delete()
            }

            });
    });

    } 
}