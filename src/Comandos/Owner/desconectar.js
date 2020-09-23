module.exports = {
            name: 'desc',
            description: 'Anula en funcionamiento del bot',
            alias: [],
            async run (client, message, args) {

    
              
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
