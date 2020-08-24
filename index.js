
//Models//
const ModelPrefix = require('./src/database/models/Prefix')
const ModelWelcome = require('./src/database/models/bienvenidas')

//Variables//
const Discord = require('discord.js')
const client = new Discord.Client({ $browser: "Discord Android" })
require('dotenv').config()
require('./src/database/index')
const fs = require('fs');

//Presence//
client.on('ready', () => {
  let puta = ["Actualizando 0.3.1", "Nuevos comandos!"];
  setInterval (() => {
client.user.setPresence({
  activity: { name: puta[Math.floor(Math.random()* puta.length)], type: "WATCHING"  },
  status: "online",
  $browser: "Discord Android" 
})
  }, 4000);
});


//Console Message//
client.on('message', msg => {
  if(msg.channel.type === "dm" || msg.author.bot) return
console.log(msg.author.tag + ": " + msg.content)




//BlackList//
const BlackList = ["534951970310586378"]
if(BlackList.includes(msg.author.id)) return
});





//GuildMemberAdd//
  


client.on('guildMemberAdd', async (member) => {
  let i = await ModelWelcome.findOne({ guildID: member.guild.id })
  if(!i) return;
  const channel = member.guild.channels.cache.get(i.channelID)
  if(!channel) return;
	
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
const cooldowns = new Discord.Collection()


//Command hendler//
client.on('message', async message => {
let archivos = fs.readdirSync('./src/General/').filter((f) => f.endsWith('.js'));


for(var archi of archivos){ 
let comando = require('./src/General/'+archi)
client.commands.set(comando.nombre, comando)
}



let obt = await ModelPrefix.findOne({guildID: message.guild.id}).exec()
let prefix = obt ? obt.prefix : "m!"


if(!message.content.startsWith(prefix)) return;



const args = message.content.slice(prefix.length).trim().split(/ +/);
const commandName = args.shift().toLowerCase();
const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.alias && cmd.alias.includes(commandName));
if (!command) return;

if(command == 'emit'){
  client.emit('guildMemberAdd', message.member)
}
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
 