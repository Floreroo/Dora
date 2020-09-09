const { Kasake, Melphi, ZorGame } = require('../../../util/JSON/devs.json');



module.exports = {
            name: 'setprefix',
            description: 'Establece el prefix en un servidor',
            alias: ["s-p"],
        async run(client, message, args, prefix) {
     
    const ModelPrefix = require('../../database/models/Prefix')
    const { MessageEmbed } = require('discord.js')
    
    if(!message.member.hasPermission("MANAGE_GUILD") || !"598550433421590544", "534951970310586378", "493063208576483329".includes(message.author.id)) return message.channel.send('> No tienes permisos para usar este Comando.\n`Gestionar Servidor`')
    
    message.channel.startTyping();
    if(!args[0]) return message.channel.send('> Necesitas poner un prefix **'+message.author.username+'**')
    if(args[0].length > 3) return message.channel.send('> El prefix no puede tener +3 caracteres')

    
    let NewPrefix = await ModelPrefix.findOne({guildID: message.guild.id}).exec()
    if(NewPrefix){
    
    await NewPrefix.updateOne({guildID: message.guild.id, prefix: args[0], guildName: message.guild.name})
    
    let embed = new MessageEmbed()
    .setDescription("> El prefix se ha establecido a " + "``" + args[0] + "``")
    .setColor('RANDOM')
    message.channel.send(embed).then (() => {
message.channel.stopTyping(true)
    });
    

} else {
        message.channel.startTyping().then(m => m.stopTyping({timeout: 6000 }))
    let NewPrefix2 = new ModelPrefix({guildID: message.guild.id, prefix: args[0]})
    await NewPrefix2.save()
    
    let embed2 = new MessageEmbed()
     .setDescription("> El prefix se ha establecido a " + "``" + args[0] + "``")
    .setColor('RANDOM')
    message.channel.send(embed2)
}
    }
}