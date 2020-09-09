module.exports = {
            name: 'desconectar',
            description: 'Anula en funcionamiento del bot',
            alias: [],
            async run (client, message, args) {

    
              const devs = require('../../../util/JSON/devs.json').devs
              if(!devs.id.includes(message.author.id)) return message.channel.send('¡No tienes permisos para usar este comando!')

        try{
            await message.channel.send('`DESCONECTADO`').then (() => {
                    process.exit();
                });
            
        

} catch (error) {
            message.channel.send('ERROR: '+ error.message)
        
    }
  }
}
