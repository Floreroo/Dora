module.exports = class {
    constructor(client) {
        this.client = client
    }

async run(message) {
     
    
       const Discord = require('discord.js')
       const { MessageEmbed, Collection } = require('discord.js')
       const Prefix = require('../database/models/Prefix')
       const cooldowns = new Collection()

        if(message.channel.type === "dm" || message.author.bot) return
        console.log(message.author.tag + ": " + message.content)

        let obt = await Prefix.findOne({guildID: message.guild.id}).exec()
        let prefix = obt ? obt.prefix : "d!"
  
        if (message.content.match(new RegExp(`^<@!?${this.client.user.id}>( |)$`))) {
        message.channel.send(`Mi Prefix en este servidor es \`${prefix}\``)
        }
    

  
        if (message.author.bot || !message.content.startsWith(prefix)) return

 
      
      
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = this.client.commands.get(commandName) || this.client.commands.find(cmd => cmd.alias && cmd.alias.includes(commandName));
  if(!command) return;
  
//Esto no me va :( (los alias xd)
        
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
})
}
}

timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);


        command.setMessage(message)
        command.run(message, args)

      }
   };

