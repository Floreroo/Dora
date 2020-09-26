module.exports = {
            name: 'desc',
            description: 'Anula en funcionamiento del bot',
            alias: [],
            async run (client, message, args) {

              const ModelBlack = require('../../database/models/blacklist')

            const poronga = await ModelBlack.findOne({blackID: message.author.id})

            const xdd = client.users.cache.get(poronga)
          
            if([xdd].includes) return message.channel.send("¡Estas en mi blacklist!");
          


            //B
       
    
              
              if(!client.devs.id.includes(message.author.id)) return 

        try{
            await message.channel.send('`DESCONECTADO`').then (() => {
                    process.exit();
                });
            
        

} catch (error) {
            message.channel.send('ERROR: '+ error.message)
        
    }
  }
}
