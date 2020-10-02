const Discord = require('discord.js');
module.exports = {
  name: 'help',
  description: 'Comando de informacion',
  alias: ["comandos"],
  async run (client, message, args, prefix) {

   //A

  //B


    if(args[0]){

      if(args[0] == "config"){
        let embed3 = new Discord.MessageEmbed()
        .addField("Configuracion", `${prefix}setprefix \n${prefix}setwelcome \n${prefix}remwelcome(deshabilitado) \n${prefix}remprefix(en pruebas)`)
        .setColor('RANDOM')
        .setDescription(`**${message.member.user.username}** recuerda que puedes unirte a mi Servidor De [Soporte](https://discord.gg/EXyn6yU)`)
        .setFooter('INFORMACION', message.guild.iconURL())
        .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
        return message.channel.send(embed3)
      }

      if(args[0] == "fun"){
        let embed4 = new Discord.MessageEmbed()
        .addField("Diversion", `${prefix}8ball \n${prefix}say \n${prefix}embedsay \n${prefix}sayimage \n${prefix}gay \n${prefix}reverse`)
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
        .addField("Utilidad",  `${prefix}avatar \n${prefix}botinvite \n${prefix}ping  \n${prefix}server \n${prefix}user \n${prefix}channel \n${prefix}role \n${prefix}emoji \n${prefix}rolelist \n${prefix}snipe \n${prefix}icon  \n${prefix}stats`)
        .setColor('RANDOM')
        .setDescription(`**${message.member.user.username}** recuerda que puedes unirte a mi Servidor De [Soporte](https://discord.gg/EXyn6yU)`)
        .setFooter('INFORMACION', message.guild.iconURL())
        .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
        return message.channel.send(embed6)
      }

       if(args[0] == "img") {
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField("Imagen", `${prefix}pornhub \n${prefix}supreme`)
        .setDescription(`**${message.member.user.username}** recuerda que puedes unirte a mi Servidor De [Soporte](https://discord.gg/EXyn6yU)`)
        .setFooter('INFORMACION', message.guild.iconURL())
        .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
        return message.channel.send(embed)

      }

      if(args[0] == "voice"){
        let embed1000 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField("voice", `${prefix}join \n${prefix}leave`)
        .setDescription(`**${message.member.user.username}** recuerda que puedes unirte a mi Servidor De [Soporte](https://discord.gg/EXyn6yU)`)
        .setFooter('INFORMACION', message.guild.iconURL())
        .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
        return message.channel.send(embed1000)
      }
    } 

    if(args[0] == "chat"){
      let embed4 = new Discord.MessageEmbed()
      .addField("Chat", `${prefix}send ${prefix}chat ${prefix}chat-delete`)
      .setColor('RANDOM')
      .setDescription(`**${message.member.user.username}** recuerda que puedes unirte a mi Servidor De [Soporte](https://discord.gg/EXyn6yU)`)
      .setFooter('INFORMACION', message.guild.iconURL())
      .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
      return message.channel.send(embed4)

    }

        let embed2 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 2048 }))
        .setFooter('INFORMACION · Numero total de comandos '+client.commands.size, message.guild.iconURL())
        .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
        .setDescription(`Hola **${message.author.username}**, soy *Dora La Exploradora* un bot multifuncional. \nPara mas informacion/ayuda puedes unirte a mi Servidor De [Soporte](https://discord.gg/EXyn6yU)  `)  
        .addField("__**Configuracion**__", `${prefix}help config`, true)
        .addField("__**Diversion**__", `${prefix}help fun`, true)
        .addField("__**Utilidad**__", `${prefix}help util`, true)
        .addField("__**Informacion**__", `${prefix}help info`, true)
        .addField("__**Imagen**__", `${prefix}help img`, true)
        .addField("__**Voice**__", `${prefix}help voice`, true)
        .setColor('RANDOM')
        message.channel.send(embed2)
    
}
}