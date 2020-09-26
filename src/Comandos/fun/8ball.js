const Discord = require('discord.js');

module.exports = {
            name: '8ball',
            alias: [],
          async run (client, message, args) {

                const ModelBlack = require('../../database/models/blacklist')

            const poronga = await ModelBlack.findOne({blackID: message.author.id})

            const xdd = client.users.cache.get(poronga)
          
            if([xdd].includes) return message.channel.send("¡Estas en mi blacklist!");
          


              //B
                    

       let m = ["Si", "No", "Probablemente", "No voy a responder a eso", "No estoy seguro"]
       var aleatorio = m[Math.floor(Math.random() * m.length)]

       message.channel.send("🎱" + "**" + message.member.displayName + "**," + " " + aleatorio)
   }
  }
