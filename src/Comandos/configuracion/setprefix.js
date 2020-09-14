


module.exports = {
            name: 'setprefix',
            description: 'Establece el prefix en un servidor',
            alias: ["s-p"],
        async run(client, message, args, prefix) {
     
    const ModelPrefix = require('../../database/models/Prefix')
    const { MessageEmbed } = require('discord.js')

    let permisos = message.member.hasPermission("MANAGE_GUILD") || client.devs.id.includes(message.author.id)
if(!permisos){
    return message.channel.send("No tienes permisos para utilizar este comando \`\`MANGE_GUILD\`\`")
}
    
   
    if(!args[0]) return message.channel.send('> Necesitas poner un prefix **'+message.author.username+'**!')
    if(args[0].length > 3) return message.channel.send('> El prefix no puede tener +3 caracteres!')
    if(args.join(' ').toLowerCase().includes(`${prefix}`)) return message.channel.send("No puedes poner el mismo prefix que hay establecido!")

    message.channel.startTyping();
    let NewPrefix = await ModelPrefix.findOne({guildID: message.guild.id}).exec()
    if(NewPrefix){
    
    await NewPrefix.updateOne({guildID: message.guild.id, prefix: args[0], guildName: message.guild.name})
    
    message.channel.send("> El prefix se ha establecido a " + "``" + args[0] + "``").then (() => {
message.channel.stopTyping(true)
    });
    

} else {
        message.channel.startTyping().then(m => m.stopTyping({timeout: 6000 }))
    let NewPrefix2 = new ModelPrefix({guildID: message.guild.id, prefix: args[0]})
    await NewPrefix2.save()
    
    message.channel.send("> El prefix se ha establecido a " + "``" + args[0] + "``")
}
    }
}