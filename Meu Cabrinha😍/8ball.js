const Discord = require('discord.js');
 

  module.exports = {
   nombre: "8ball",
   alias: [],
   run: (client, message, args) => {

       let m = ["Si", "No", "Probablemente", "No voy a responder a eso", "No estoy seguro"]
       let aleatorio = (Math.floor(Math.random()) * m.length)
       message.channel.send("🎱" + "**" + message.member.displayName + "**," + " " + m[aleatorio])
   }
  }