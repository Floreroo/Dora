const Discord = require('discord.js');


module.exports = {
  name: "botp",
  alias: ["botpr"],
  descripcion: "Pone presencia a tu bot",
  run: (client, message, args) => {

    if(message.author.id === "598550433421590544");
client.user.setPresence({
    status: "dnd",
    activity: {
        name: args[1],
        type: args[2],
        url: args[3]
    }
});

message.channel.send('> Presencia camiada')

   .catch(err) 
       message.channel.send('Error: ' + err)



  }
}