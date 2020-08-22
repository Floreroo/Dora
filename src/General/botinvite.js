const Discord = require('discord.js');

module.exports = {
    nombre: "botinvite",
    alias: [],
    descripcion: "Los comandos del bot",
    run: (client, message, args) => {


        const u = client.users.resolve(args[0]);
        if(u.bot){
        if(args[0]){
        const embed = new Discord.MessageEmbed()
        .addField(`Invitar a ${u.tag}`, `¡Su [invitacion](https://discord.com/api/oauth2/authorize?client_id=${u.id}&permissions=8&scope=bot) recien salida del horno, cuidado que quema!`)
        .setImage(u.displayAvatarURL({format: "png", size: 2048, dynamic: true}))
        .setColor('RANDOM')
        .setFooter(" Pedido por: " + message.member.user.tag, message.author.displayAvatarURL())
        message.channel.send(embed)
        }
        else{
            message.channel.send('Debes poner la id del bot al que quieras invitar')
        }
      }
      else{
          message.channel.send('Ingrese la id de un bot porfavor')
      }
     }
    }
