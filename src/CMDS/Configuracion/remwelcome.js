const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
module.exports = {
 name: "remwelcome",
 alias: ["remwel", "delwelcome", "delwel"],
 async run (client, message, args) {
  
 //A

//B

  
   const  ModelWelcome = require('../../database/models/bienvenidas')

   let permisos = client.devs.id.includes(message.author.id)
   if(!permisos) return message.channel.send('¡Este comando esta **deshabilitado**! Podras usarlo el dia 30/9/2020')

  await ModelWelcome.deleteOne({ guildID: message.guild.id })

          let embed = new MessageEmbed()
          .setDescription(`> El canal se bienvenidas se ha removido correctamente`)
          .setColor('RANDOM')
          .setFooter(message.guild.name, message.guild.iconURL({size: 2048, dynamic: true}))
          message.channel.send(embed)
          
              
 }
}