const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Comando de informacion',
  alias: ["comandos"],
  async run (client, message, args, prefix) {
    if(args[0]){

      if(args[0] == "config"){
        let embed3 = new Discord.MessageEmbed()
        .addField("Configuracion", `${prefix}setprefix \n${prefix}setwelcome`)
        .setColor('RANDOM')
        .setDescription(`**${message.member.user.username}** recuerda que puedes unirte a mi Servidor De [Soporte](https://discord.gg/EXyn6yU)`)
        .setFooter('INFORMACION', message.guild.iconURL())
        .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
        return message.channel.send(embed3)
      }
      if(args[0] == "fun"){
        let embed4 = new Discord.MessageEmbed()
        .addField("Diversion", `${prefix}8ball \n${prefix}say \n${prefix}sayimage`)
        .setColor('RANDOM')
        .setDescription(`**${message.member.user.username}** recuerda que puedes unirte a mi Servidor De [Soporte](https://discord.gg/EXyn6yU)`)
        .setFooter('INFORMACION', message.guild.iconURL())
        .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
        return message.channel.send(embed4)
      }
     if(args[0] === "info"){
     let embed5 = new Discord.MessageEmbed()
     .addField("Informacion", `${prefix}help \n${prefix}invite \n${prefix}ping \n${prefix}stats`, true)
     .setColor('RANDOM')
     .setDescription(`**${message.member.user.username}** recuerda que puedes unirte a mi Servidor De [Soporte](https://discord.gg/EXyn6yU)`)
     .setFooter('INFORMACION', message.guild.iconURL())
     .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
    return message.channel.send(embed5)
     }
      if(args[0] == "util"){
        let embed6 = new Discord.MessageEmbed()
        .addField("Utilidad",  `${prefix}avatar \n${prefix}botinvite \n${prefix}ping  \n${prefix}server \n${prefix}user \n${prefix}channelinfo \n${prefix}roleinfo \n${prefix}rolelist  \n${prefix}stats`)
        .setColor('RANDOM')
        .setDescription(`**${message.member.user.username}** recuerda que puedes unirte a mi Servidor De [Soporte](https://discord.gg/EXyn6yU)`)
        .setFooter('INFORMACION', message.guild.iconURL())
        .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
        return message.channel.send(embed6)
      }
       if(args[0] == "nsfw") {
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField("¡Estamos en mantenimiento!", "¡Solo es cuestion de dias para que los comandos de nsfw vuelvan!")
        .setDescription(`**${message.member.user.username}** recuerda que puedes unirte a mi Servidor De [Soporte](https://discord.gg/EXyn6yU)`)
        .setFooter('INFORMACION', message.guild.iconURL())
        .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
        return message.channel.send(embed)
      }
    } 
        let embed2 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 2048 }))
        .setFooter('INFORMACION', message.guild.iconURL())
        .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
        .setDescription(`Hola **${message.author.username}**, soy *Dora La Exploradora* un bot multifuncional. \nPara mas informacion/ayuda puedes unirte a mi Servidor De [Soporte](https://discord.gg/EXyn6yU)  `)  
        .addField("__**Configuracion**__", `${prefix}help config`, true)
        .addField("__**Diversion**__", `${prefix}help fun`, true)
        .addField("__**Utilidad**__", `${prefix}help util`, true)
        .addField("__**Nsfw**__", `${prefix}help nsfw`)
        .setColor('RANDOM')
        message.channel.send(embed2)
}
}