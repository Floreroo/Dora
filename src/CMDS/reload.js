const { Kasake, Melphi, ZorGame } = require('../../util/devs')



const Base = require('../../base/Commands')

class Reload extends Base {
    constructor(client){
        super(client, {
            name: '',
            description: '',
            usage: '',
            category: '',
            cooldown: 2000,
            alias: [],
            permLevel: 0,
            permission: "READ_MESSAGES"

        })
    }
    
async run(message, args) {

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

module.exports = Reload