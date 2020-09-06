const Discord = require('discord.js')
const cooldowns = new Discord.Collection()
const fs = require('fs')
const ModelPrefix = require("./src/database/models/Prefix")
const ModelWelcome = require("./src/database/models/bienvenidas")
const Prefix = require('./src/database/models/Prefix')
const { Collection } = require('discord.js')
const client = new Discord.Client({ config: './config.json',  disableMentions: 'everyone'})
require('dotenv').config()
require('./src/database/index')

client.commands = new Collection()
client.devs = require('./util/devs')
client.version = "0.5.9"
client.cosas = { Boolean } 
client.pornhub = require('./util/sitios/cosas.json')



client.on('guildMemberAdd', async (member) => {
  let i = await ModelWelcome.findOne({ guildID: member.guild.id })
  if(!i) return;
  const channel = member.guild.channels.cache.get(i.channelID)
  if(!channel) return;

  channel.send(`Bienvenid@ ${member} a ${member.guild.name}`)
});
  



client.on("message", async message => {
 let archivos = fs.readdirSync('./src/A/').filter((f) => f.endsWith('.js'));
  
  for(var archi of archivos){ 
  let comando = require(`./src/A/${archi}`)
  client.commands.set(comando.name, comando)
  }



 if(message.channel.type === "dm" || message.author.bot) return
 console.log(message.author.tag + ": " + message.content)



 let obt = await ModelPrefix.findOne({guildID: message.guild.id, guildName: message.guild.name, prefix: Prefix}).exec()
 let prefix = obt ? obt.prefix : "d!"



 if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
 message.channel.send(`Mi Prefix en este servidor es \`${prefix}\``)
 }


 if (message.author.bot || !message.content.startsWith(prefix)) return

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
})
}
}

timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
});


client.on('ready', () => {
  setInterval (() => {
  let puta = ["???", "البوتاسيون🤣🤣", "??عرب¿¿¿ .... :D"]
client.user.setPresence({
activity: { name: puta[Math.floor(Math.random()* puta.length)], type: "WATCHING"  },
status: "idle",

})
}, 6000)
});

client.login(process.env.DISCORD_TOKEN)

 
