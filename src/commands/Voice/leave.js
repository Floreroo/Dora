module.exports = {
          name: "leave",
          alias: ["l", "salir"],
          async run (client, message, args){
          
          if(!message.member.voice.channel) return message.channel.send("¡Debes estar en un canal para que pueda salir!")
          message.member.voice.channel.leave()
        message.channel.send("¡Me he salido satisfactoriamente a " + "``" + message.member.voice.channel.name + "``!").catch(err => message.channel.send(`¡Ha habido un error! \`\`${err}\`\``));
          }
         }