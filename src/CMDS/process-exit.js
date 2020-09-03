const { Kasake, Melphi, ZorGame } = require('../../util/devs')


require('../../util/devs')

const Base = require('../../base/Commands')

class Processexit extends Base {
    constructor(client){
        super(client, {
            name: 'process-exit',
            description: 'Anula en funcionamiento del bot',
            usage: 'process-exit',
            category: 'Dev',
            cooldown: 2000,
            alias: ["p-e"],
            permLevel: 0,
            permission: "READ_MESSAGES"

        })
    }
    
async run(message, args) {
        if(![Kasake, Melphi, ZorGame].includes(message.author.id)) return

        try{
            await message.channel.send('`DESCONECTADO`').then (() => {
                    process.exit();
                });
            
        

} catch (error) {
            message.channel.send('ERROR: '+ error.message)
        
    }
  }
}

module.exports = Processexit