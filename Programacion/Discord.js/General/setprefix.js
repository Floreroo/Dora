const Discord = require('discord.js');

 module.exports = {
   nombre: "setprefix",
   alias: ["prefix"],
   run: async (client, message, args) => {

    const ModelPrefix = require('../../../database/models/Prefix')
    const { MessageEmbed } = require('discord.js')
    
    if(!message.member.hasPermission("MANAGE_GUILD")){
        message.channel.send('No tienes permisos para usar este Comando.\n`Gestionar Servidor`')
    }
    
    if(!args[0]) return message.channel.send('Hmm... Debes escribir un prefijo, **'+message.author.username+'**')
    
    let NewPrefix = await ModelPrefix.findOne({guildID: message.guild.id}).exec()
    if(NewPrefix){
    
    await NewPrefix.updateOne({guildID: message.guild.id, prefix: args[0], guildName: message.guild.name})
    
    let embed = new MessageEmbed()
    .setDescription(`Genial, ahora mi Prefix es **${args[0]}**`)
    .setColor('RANDOM')
    message.channel.send(embed)
    
    } else {
    
    let NewPrefix2 = new ModelPrefix({guildID: message.guild.id, prefix: args[0]})
    await NewPrefix2.save()
    
    let embed2 = new MessageEmbed()
    .setDescription(`Genial, ahora mi Prefix es **${args[0]}**`)
    .setColor('RANDOM')
    message.channel.send(embed2)
    
    }}}