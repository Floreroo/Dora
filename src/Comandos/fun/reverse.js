const { reverse } = require("dns")

module.exports = {
    name: "reverse",
    alias: [],
    async run (client, message, args) {

        const ModelBlack = require('../../database/models/blacklist')

            const poronga = await ModelBlack.findOne({blackID: message.author.id})

            const xdd = client.users.cache.get(poronga)
          
            if([xdd].includes) return message.channel.send("¡Estas en mi blacklist!");
          


      //B
    
    
        if(!args[0]) return message.channel.send('Pon el texto!')
        message.channel.send(args.slice(0).join(' ').split('').reverse().join(''));
    }
}

