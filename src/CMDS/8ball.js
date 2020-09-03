const Discord = require('discord.js');
const Base = require('../../base/Commands')

class Ball extends Base {
    constructor(client){
        super(client, {
            name: '8ball',
            description: 'Pregunta y Respuesta.',
            usage: '8ball <pregunta>',
            category: 'Diversión',
            cooldown: 2000,
            alias: [],
            permLevel: 0,
            permission: "READ_MESSAGES"

        })
    }
    
run(message, args) {


       let m = ["Si", "No", "Probablemente", "No voy a responder a eso", "No estoy seguro"]
       var aleatorio = m[Math.floor(Math.random() * m.length)]

       message.channel.send("🎱" + "**" + message.member.displayName + "**," + " " + aleatorio)
   }
  }

  module.exports = Ball