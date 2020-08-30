const Discord = require('discord.js');

 module.exports = {
   nombre: "setprefix",
   alias: ["s-p"],
   run: async (client, message, args) => {

    const ModelPrefix = require('../database/models/Prefix')
    const { MessageEmbed } = require('discord.js')
    
    if(!message.member.hasPermission("MANAGE_GUILD")){
       return message.channel.send('> No tienes permisos para usar este Comando.> \n`Gestionar Servidor`')
    }
    
    if(!args[0]) return message.channel.send('> Necesitas poner un prefix **'+message.author.username+'**')
    
    let NewPrefix = await ModelPrefix.findOne({guildID: message.guild.id}).exec()
    if(NewPrefix){
    
    await NewPrefix.updateOne({guildID: message.guild.id, prefix: args[0], guildName: message.guild.name})
    
    let embed = new MessageEmbed()
    .setDescription("> El prefix se ha establecido a " + "``" + args[0] + "``")
    .setColor('RANDOM')
    message.channel.send(embed)
    
    } else {
    
    let NewPrefix2 = new ModelPrefix({guildID: message.guild.id, prefix: args[0]})
    await NewPrefix2.save()
    
    let embed2 = new MessageEmbed()
     .setDescription("> El prefix se ha establecido a " + "``" + args[0] + "``")
    .setColor('RANDOM')
    message.channel.send(embed2)
    
    }}}