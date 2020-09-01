const { Kasake, Melphi, ZorGame } = require('../../util/devs')



module.exports = {
    nombre: "reload",
    alias: [],
    cooldown: 10,
    run: (client, message, args) => {
    
    if(![Kasake, Melphi, ZorGame].includes(message.author.id)) return

    if(!args[0]) return message.channel.send('Ingrese el comando que quiera recargar')
  
  let comando = args[0].toLowerCase()

    try{
     
    delete require.cache[require.resolve(`./${comando}.js`)]

  client.commands.delete(comando)
 
  const pull = require(`./${comando}.js`)
  client.commands.set(comando, pull)

} catch (error) {
    
   return message.channel.send(`No se ha recargado: \`${args[0].toUpperCase()}\``)
    }

message.channel.send(`El comando \`${args[0].toUpperCase()}\` ha sido recargado`)

   }
}