const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
module.exports = {
 name: "remwelcome",
 alias: ["remwel", "delwelcome", "delwel"],
 async run (client, message, args) {
          
   const  ModelWelcome = require('../../database/models/bienvenidas')

   let permisos = message.member.hasPermission("MANAGE_GUILD") || client.devs.id.includes(message.author.id)
   if(!permisos){
       return message.channel.send("No tienes permisos para utilizar este comando \`\`MANGE_GUILD\`\`")
   }

  await ModelWelcome.findOne({ guildID: message.guild.id }).deleteOne()

          let embed = new MessageEmbed()
          .setDescription(`> El canal se bienvenidas se ha removido correctamente`)
          .setColor('RANDOM')
          .setFooter(message.guild.name, message.guild.iconURL({size: 2048, dynamic: true}))
          message.channel.send(embed)
          
              
 }
}