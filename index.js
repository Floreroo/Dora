const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('24/7'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


//Models//
const ModelWelcome = require('./src/database/models/bienvenidas')
const ModelPrefix = require('./src/database/models/Prefix')



//Variables//
const Discord = require('discord.js')
const client = new Discord.Client({ $browser: "Discord Android" })
require('dotenv').config()
require('./src/database/index')
const fs = require('fs');



//Presence//
client.on('ready', () => {
  let puta = ["NO TE PONGAS LA MASCARILLA", "NOS ESTAN MANIPULANDO LAS ELITES"];
  setInterval (() => {
client.user.setPresence({
  activity: { name: puta[Math.floor(Math.random()* puta.length)], type: "WATCHING"  },
  status: "idle",
})
  }, 10000);
});






//Console Message//
client.on('message', msg => {
  if(msg.channel.type === "dm" || msg.author.bot) return
console.log(msg.author.tag + ": " + msg.content)
});



//Guild member add//
client.on('guildMemberAdd', async (member) => {
  let i = await ModelWelcome.findOne({ guildID: member.guild.id })
  if(!i) return;
  const channel = member.guild.channels.cache.get(i.channelID)
  if(!channel) return;
	channel.send(`Bienvenido ${member} a ${member.guild.name}`)
  const {createCanvas, loadImage } = require('canvas');
  const canvas = createCanvas(500, 200);
  const ctx = canvas.getContext('2d');
  
  
  
  const background = await loadImage('https://becauseofthesethings.files.wordpress.com/2013/11/lazerhawkferrari.jpg')
  ctx.drawImage(background, 0 , 0, canvas.width, canvas.height);
  
  
  ctx.strokeStyle = '#FF4200'
  ctx.strokeRect(0, 0, canvas.width, canvas.height)
  
  
  ctx.fillStyle = '#FF4200'
  var size1 = 40;
  var size2 = 30;
  var size3 = 23;
  
  var Bienvenida = "Bienvenid@"
  
   do{
       ctx.font = `${size1 -= 5}px Berlin Sans FB`
   } while(ctx.measureText(Bienvenida).whith > canvas.width - 225);
     ctx.fillText(Bienvenida, 200, 65)
     ctx.fillStyle = '#FF4200'
   
  var usuario =  `${member.user.tag}`
  do{
      ctx.font = `${size2 -= 5}px Berlin Sans FB`
  } while(ctx.measureText(usuario).whith > canvas.width - 225);
  ctx.fillText(usuario, 200, 110)
  ctx.fillStyle = 'FF4200'

  var joined = `Bienvenid@ a ${member.guild.name}`;
  
   do{   
       ctx.font = `${size3 -= 5}px Berlin Sans FB`
   } while(ctx.measureText(joined).whith > canvas.width - 225);
   ctx.fillText(joined, 200, 145)
   ctx.fillStyle = '#FFE800'

   ctx.beginPath();
   ctx.arc(100, 100, 75, 0, Math.PI * 2, true)
   ctx.textAlign = "center"
   ctx.closePath();
   ctx.clip();

      const avatar = await loadImage(member.user.displayAvatarURL({format: "jpg", dynamic: true}));
   ctx.drawImage(avatar, 25, 25, 150, 150)
  
  const Attachment = new Discord.MessageAttachment(canvas.toBuffer(), "canvas.jpg");
  channel.send(Attachment)  
});



//Variables ricas/
client.commands = new Discord.Collection();
client.prefixes = require('./src/database/models/Prefix')
client.mongoose = require('./src/database/index')
client.devs = require('./util/devs')
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
return message.reply(`${message.author.username}, Debes esperar ${timeLeft.toFixed(1)}sec`).then(m => {
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

 
