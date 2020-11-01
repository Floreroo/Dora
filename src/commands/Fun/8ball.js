const Discord = require('discord.js');

module.exports = {
            name: '8ball',
            alias: [],
          async run (client, message, args) {

               //A

              //B
                    

       let m = ["Si", "No", "Probablemente", "No voy a responder a eso", "No estoy seguro"]
       var aleatorio = m[Math.floor(Math.random() * m.length)]

       message.channel.send("🎱" + "**" + message.member.displayName + "**," + " " + aleatorio)
   }
  }
