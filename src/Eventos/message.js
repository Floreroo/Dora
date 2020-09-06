module.exports = async (client, message) => {

     
    
       const Discord = require('discord.js')
       const { Collection } = require('discord.js')
       const ModelPrefix = require("../database/models/Prefix")
       const cooldowns = new Collection()
    


       if(message.channel.type === "dm" || message.author.bot) return
       console.log(message.author.tag + ": " + message.content)
      
      
      
       let obt = await ModelPrefix.findOne({guildID: message.guild.id, guildName: message.guild.name}).exec()
       let prefix = obt ? obt.prefix : "d!"
      
      
       if (message.author.bot) 
       if(!message.content.startsWith(prefix)) return
      
       if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
       message.channel.send(`Mi Prefix en este servidor es \`${prefix}\``)
       }
      
      
      
       if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send("No tengo permisos para realizar este comando")
       if(!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send("No tengo permisos para realizar este comando")
       if(!message.guild.me.hasPermission("ADD_REACTIONS")) return message.channel.send("No tengo permisos para realizar este comando")
       if(!message.guild.me.hasPermission("CHANGE_NICKNAME")) return message.channel.send("No tengo permisos para realizar este comando")
      
      
      
      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const commandName = args.shift().toLowerCase();
      const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.alias && cmd.alias.includes(commandName));
      if(!command) return;
      
      
      command.run(client, message, args, prefix)
      
      
      
      if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Discord.Collection());
      }
      
      const now = Date.now();
      const timestamps = cooldowns.get(command.name);
      const cooldownAmount = (cooldowns.cooldown || 2) * 2500;
      if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
      
      if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
       return message.reply(`debes esperar ${timeLeft.toFixed(1)}sec`).then(m => {
       setTimeout(() => {  
        m.delete()
             }, 10000);
            });
           }
         }
      
      timestamps.set(message.author.id, now);
      setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }
