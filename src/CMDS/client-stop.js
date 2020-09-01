const { Kasake, Melphi, ZorGame } = require('../../util/devs')


require('../../util/devs')

module.exports = {
    run: async (client, message, args) => {
 
        if(![Kasake, Melphi, ZorGame].includes(message.author.id)) return

        try{
            await message.channel.send('`DESCONECTADO`').then (() => {
                    process.exit();
                });
            
        

} catch (error) {
            message.channel.send('ERROR: '+ error.message)
        }

    },

    nombre: "client-stop",
    alias: ["c-s"]

}