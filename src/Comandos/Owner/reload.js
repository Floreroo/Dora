module.exports = {
  name: "reload",
  description: "Recarga un comando",
  alias: [],
async run (client, message, args) {
  
  
  if(!client.devs.id.includes(message.author.id)) return message.channel.send('¡No tienes permisos para usar este comando!')

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