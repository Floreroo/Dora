module.exports = class {
    constructor(client) {
        this.client = client
    }

 async run(message) {
     
    
    
       const { MessageEmbed, Collection } = require('discord.js')
       const Prefix = require('../database/models/Prefix')


        if(message.channel.type === "dm" || message.author.bot) return
        console.log(message.author.tag + ": " + message.content)

        let obt = await Prefix.findOne({guildID: message.guild.id}).exec()
        let prefix = obt ? obt.prefix : "d!"
  
        if (message.content.match(new RegExp(`^<@!?${this.client.user.id}>( |)$`))) {
        message.channel.send(`Mi Prefix en este servidor es \`${prefix}\``)
        }
    
        if(!message.content.startsWith(prefix)) return;

  
        if (message.author.bot || !message.content.startsWith(prefix)) return

 
        const args = message.content.split(/\s+/g)
        const command = args.shift().slice(prefix.length)
        const cmd = this.client.commands.get(command) || this.client.commands.get(this.client.alias.get(command))
        if (!cmd) return;

        cmd.setMessage(message)
        cmd.run(message, args)

        console.log(require)
      }
   }