const Discord = require('discord.js')

module.exports = {
 name: "remwelcome",
 alias: ["remwel", "delwelcome", "delwel"],
 async run (client, message, args) {
          
   const { ModelWelcome } = require('../../database/models/bienvenidas');

   let pene = (!message.member.hasPermission("MANAGE_GUILD") || client.devs.id.includes(message.author.id)) 

   if(!pene){
          return message.channel.send('No tienes permisos para usar este Comando.\n`Gestionar Servidor`') 
   }

   let NewWelcome = await ModelWelcome.findOne({guildID: message.guild.id}).deleteOne()

   if(NewWelcome){ 
          await NewWelcome.updateOne({guildID: message.guild.id, channelID: canal.id, guildName: message.guild.name})
          
          let embed = new MessageEmbed()
          .setDescription(`> El canal se bienvenidas se ha removido correctamente`)
          .setColor('RANDOM')
          .setFooter(message.guild.name, message.guild.iconURL({size: 2048, dynamic: true}))
          message.channel.send(embed)
          
          } else {
          
          let NewBienvenida2 = new Bienvenida({guildID: message.guild.id, channelID: canal.id}) //Colocamos los datos
          await NewBienvenida2.save()
          
          let embed2 = new MessageEmbed()
          .setDescription(`> El canal se bienvenidas se ha removido correctamente`)
          .setColor('RANDOM')
          .setFooter(message.guild.name, message.guild.iconURL({size: 2048, dynamic: true}))
          message.channel.send(embed2)}          
 }
}