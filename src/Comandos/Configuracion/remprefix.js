const { Model } = require('mongoose')

module.exports = {
          name: 'remprefix',
          description: 'Establece el prefix en un servidor',
          alias: ["r-p"],
      async run(client, message, args, prefix) {
   
  const ModelPrefix = require('../../database/models/Prefix')

  let permisos = message.member.hasPermission("MANAGE_GUILD") || client.devs.id.includes(message.author.id)
  if(!permisos){
      return message.channel.send("No tienes permisos para utilizar este comando \`\`MANGE_GUILD\`\`")
  }  

await ModelPrefix.findOne({guildID: message.guild.id}).deleteOne()

   message.channel.send("> Se ha reseteado el prefix")
      }
}