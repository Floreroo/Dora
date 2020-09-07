const { Kasake, Melphi, ZorGame } = require('../../../util/devs')

module.exports = {
            name: 'process-exit',
            description: 'Anula en funcionamiento del bot',
            alias: [],
            async run (client, message, args) {

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
