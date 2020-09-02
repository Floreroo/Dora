//Models//
const ModelWelcome = require('./src/database/models/bienvenidas')
const ModelPrefix = require('./src/database/models/Prefix')



//Variables//
const Discord = require('discord.js')
const client = new Discord.Client({ $browser: "Discord Android" })
const Canvas = require('canvas')
require('dotenv').config()
require('./src/database/index')
const fs = require('fs');



//Presence//
client.on('ready', () => {
  let puta = ["Dora Dora Dora la exploradora!! Si!! ", "a botas"];
  setInterval (() => {
client.user.setPresence({
  activity: { name: puta[Math.floor(Math.random()* puta.length)], type: "WATCHING"  },
  status: "idle",
})
  }, 20000);
});


//Console Message//
client.on('message', msg => {
  if(msg.channel.type === "dm" || msg.author.bot) return
console.log(msg.author.tag + ": " + msg.content)
});



//Guild member add/


client.on('guildMemberAdd', async (member) => {
  let i = await ModelWelcome.findOne({ guildID: member.guild.id })
  if(!i) return;
  const channel = member.guild.channels.cache.get(i.channelID)
  if(!channel) return;
	channel.send(`Bienvenid@ ${member} a ${member.guild.name}`)

  let fontSize = 70;
  
  const imagen = Canvas.createCanvas(700, 250); 
  const ctx = imagen.getContext('2d')






  const background = await Canvas.loadImage('https://bangbranding.com/blog/wp-content/uploads/2016/11/700x511_SliderInterior.jpg');
  ctx.drawImage(background, 0, 0, imagen.width, imagen.height);
  
  ctx.strokeStyle = '#74037b';
  ctx.strokeRect(0, 0, imagen.width, imagen.height);
    


  
    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`Bienvenido ${member}`, imagen.width / 2.5, imagen.height / 3.5);
  
    ctx.font = (imagen, `${member.displayName}!`);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName}!`, imagen.width / 2.5, imagen.height / 1.8);
    
  
    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    
  const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg', size: 2048, dynamic: true }));
  ctx.drawImage(avatar, 25, 25, 200, 200);

  const attachment = new Discord.MessageAttachment(imagen.toBuffer(), 'bienvenida.png');
  channel.send(attachment)

})
  


//Variables ricas/
client.commands = new Discord.Collection();
client.prefixes = require('./src/database/models/Prefix')
client.mongoose = require('./src/database/index')
client.devs = require('./util/devs')
client.version = "0.5.9"
client.cosas = { Boolean } 
client.pornhub = { String }
const cooldowns = new Discord.Collection()



client.on('message', async message => {

  let archivos = fs.readdirSync('./src/CMDS/').filter((f) => f.endsWith('.js'));
  
  
  for(var archi of archivos){ 
  let comando = require('./src/CMDS/'+archi)
  client.commands.set(comando.nombre, comando)
  }
  
  
  
  let obt = await ModelPrefix.findOne({guildID: message.guild.id}).exec()
  let prefix = obt ? obt.prefix : "m!"
  
  if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
    message.channel.send(`Mi Prefix en este servidor es \`${prefix}\``)}

    
  if(!message.content.startsWith(prefix)) return;
  
  
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.alias && cmd.alias.includes(commandName));
  if (!command) return;
  
  if (!cooldowns.has(command.nombre)) {
    cooldowns.set(command.nombre, new Discord.Collection());
}

const now = Date.now();
const timestamps = cooldowns.get(command.nombre);
const cooldownAmount = (command.cooldown || 2) * 2500;
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
  //COSas/
  try {
  
   command.run(client, message, args);
  
  
  
  } catch (error) {
  
  
    console.error(error);
  }
});  
  
  

client.login(process.env.DISCORD_TOKEN).then (() => {
  console.log('Stamo activo papi')
});

 
