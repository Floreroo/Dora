const { Discord, MessageEmbed} = require('discord.js')

  
  module.exports = {
  name: "setwelcome",
  descripcion: "Estalece el canal de bienvenidas en un servidor",
  alias: [],
  async run (client, message, args) {
  

        let Bienvenida = require('../database/models/bienvenidas')

if(!message.member.hasPermission("MANAGE_GUILD")){
    message.channel.send('No tienes permisos para usar este Comando.\n`Gestionar Servidor`') 
}

if(!args[0]) return message.channel.send('Debes mencionar un Canal.')

let canal = message.mentions.channels.first()//La mencion del canal
let NewWelcome = await Bienvenida.findOne({guildID: message.guild.id}).exec()
if(NewWelcome){ 
await NewWelcome.updateOne({guildID: message.guild.id, channelID: canal.id, guildName: message.guild.name})

let embed = new MessageEmbed()
.setDescription(`> El canal se bienvenidas se ha establecido en **${canal.name}**`)
.setColor('RANDOM')
.setFooter(message.guild.name, message.guild.iconURL({size: 2048, dynamic: true}))
message.channel.send(embed)

} else {

let NewBienvenida2 = new Bienvenida({guildID: message.guild.id, channelID: canal.id}) //Colocamos los datos
await NewBienvenida2.save()

let embed2 = new MessageEmbed()
.setDescription(`> El canal se bienvenidas se ha establecido en **${canal.name}**`)
.setColor('RANDOM')
.setFooter(message.guild.name, message.guild.iconURL({size: 2048, dynamic: true}))
message.channel.send(embed2)}
    }
}

