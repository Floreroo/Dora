const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Comando de informacion',
  alias: ["comandos"],
  async run(client, message, args, prefix) {

      if (!args[0]){
      let embed2 = new Discord.MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL({
        dynamic: true,
        size: 2048
      }))
      .setFooter('INFORMACION · Número total de comandos ' + client.commands.size, message.guild.iconURL())
      .setDescription(`Hola, \*\*${message.author.username}\*\*. Soy Du-Du-Du-Dora, un bot multifuncional. Quién sabe, algún día puede que nos conozcamos, pero antes únete a mi [Servidor de Soporte](https://discord.gg/EXyn6yU) o visitar mi [Página Web](https://ladorachula.github.io).`)
      .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
      .addField("__**Configuracion**__", `${prefix}help config`, true)
      .addField("__**Diversion**__", `${prefix}help fun`, true)
      .addField("__**Mod**__", `${prefix}help mod`, true)
      .addField("__**Utilidad**__", `${prefix}help util`, true)
      .addField("__**Informacion**__", `${prefix}help info`, true)
      .addField("__**Imagen**__", `${prefix}help img`, true)
      .addField("__**Voice**__", `${prefix}help voice`, true)
      .setColor('RANDOM')
    return message.channel.send(embed2)
    }

switch (args[0]) {
case 'info':
 let embed5 = new Discord.MessageEmbed()
          .addField("Informacion", `${prefix}help \n${prefix}invite \n${prefix}ping \n${prefix}stats`, true)
          .setColor('RANDOM')
          .setFooter('INFORMACION', message.guild.iconURL())
          .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
       message.channel.send(embed5)
break;
case 'config':
       let embed3 = new Discord.MessageEmbed()
          .addField("Configuracion", `${prefix}setprefix \n${prefix}setwelcome[${prefix}wel add & remove]`)
          .setColor('RANDOM')
          .setFooter('INFORMACION', message.guild.iconURL())
          .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
       message.channel.send(embed3)
break;
case 'fun':
let embed4 = new Discord.MessageEmbed()
          .addField("Diversion", `${prefix}8ball \n${prefix}say \n${prefix}embedsay \n${prefix}sayimage \n${prefix}gay \n${prefix}reverse`)
          .setColor('RANDOM')
          .setFooter('INFORMACION', message.guild.iconURL())
          .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
       message.channel.send(embed4)
break;
case 'util':
        let embed6 = new Discord.MessageEmbed()
          .addField("Utilidad", `${prefix}avatar \n${prefix}botinvite \n${prefix}ping  \n${prefix}server \n${prefix}user \n${prefix}channel \n${prefix}role \n${prefix}emoji \n${prefix}rolelist \n${prefix}snipe \n${prefix}icon  \n${prefix}stats`)
          .setColor('RANDOM')
          .setFooter('INFORMACION', message.guild.iconURL())
          .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
       message.channel.send(embed6)
break;
case 'img':
  let embed = new Discord.MessageEmbed()
          .addField("Imagen", `${prefix}pornhub \n${prefix}supreme`)
            .setColor('RANDOM')
          .setFooter('INFORMACION', message.guild.iconURL())
          .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
       message.channel.send(embed)
break;
case 'voice':
 let embed0 = new Discord.MessageEmbed()
          .addField("Voice", `${prefix}join \n${prefix}leave`)
          .setColor('RANDOM')
          .setFooter('INFORMACION', message.guild.iconURL())
          .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
        message.channel.send(embed0)
break;
  let embed1000 = new Discord.MessageEmbed()
        .addField("Mod", `${prefix}ban \n${prefix}kick`)
        .setColor('RANDOM')
        .setFooter('INFORMACION', message.guild.iconURL())
        .setAuthor(message.member.user.tag, message.author.displayAvatarURL())
      message.channel.send(embed1000)
break;
  default:
 message.channel.send("> Esta categoría no existe")
break;
};

  }
}
