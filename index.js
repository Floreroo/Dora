const express = require('express');
const app = express(); 
const port = 7000;

app.get('/', (req, res) => res.send('24/7'));

app.listen(port, () => console.log(`Local host => http://localhost:${port}`))




//Index.js//
const Discord = require('discord.js')

const client = new Discord.Client()
require('dotenv').config()

const db = require('megadb');
const fs = require('fs');
let prefix_db = new db.crearDB('prefixes')

client.on('ready', () => {
  let puta = ["🤡🤡🤡"];
  setInterval (() => {
client.user.setPresence({
  activity: { name: puta[Math.floor(Math.random()* puta.length)], type: "WATCHING"  },
  status: "dnd",
  url: "https://www.twitch.tv/auronplay"
})
  }, 4000);
});


client.on('message', msg => {
  if(msg.channel.type === "dm") return msg.author.send('No respondo mensajes privados, cualquier problema recuerda usar el comando ``report``')
console.log(msg.member.user.tag +": " + msg.content)



//BlackList//
const BlackList = [""]
if(BlackList.includes(msg.author.id)) return
});








client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection()


//Command hendler//
client.on('message', async message => {
let archivos = fs.readdirSync("./Programacion/Discord.js/General/").filter((f) => f.endsWith('.js'));


for(var archi of archivos){ 
let comando = require('./Programacion/Discord.js/General/'+archi)
client.commands.set(comando.nombre, comando)
}


let prefix;
if(prefix_db.tiene(`${message.guild.id}`)) {
  prefix = await prefix_db.obtener(`${message.guild.id}`)
}else{
  prefix = "m!"
}

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
const cooldownAmount = (command.cooldown || 3) * 1000;
if (timestamps.has(message.author.id)) {
const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

if (now < expirationTime) {
const timeLeft = (expirationTime - now) / 1000;
return message.reply(`Tienes que esperar ${timeLeft.toFixed(1)}sec`).then(m => {
setTimeout(() => {  
m.delete()
}, 5000);
})
}
}

timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

try {

 command.run(client, message, args);



} catch (error) {


  console.error(error);
}
});




client.login(process.env.DISCORD_TOKEN)
