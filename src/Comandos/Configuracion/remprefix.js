const { Model } = require('mongoose')

module.exports = {
          name: 'remprefix',
          description: 'Establece el prefix en un servidor',
          alias: ["r-p"],
      async run(client, message, args, prefix) {
   
        const ModelBlack = require('../../database/models/blacklist')

            const poronga = await ModelBlack.findOne({blackID: message.author.id})

            const xdd = client.users.cache.get(poronga)
          
            if([xdd].includes) return message.channel.send("¡Estas en mi blacklist!");
          


      //B
    

  const ModelPrefix = require('../../database/models/Prefix')
  

  let permisos = client.devs.id.includes(message.author.id)
  if(!permisos) return message.channel.send('¡Este comando esta en **pruebas**! Podras usarlo el dia 30/9/2020')


await ModelPrefix.findOne({guildID: message.guild.id}).deleteOne()

   message.channel.send("> Se ha reseteado el prefix")
      }
}