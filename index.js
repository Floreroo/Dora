const express = require('express');
const app = express(); 
const port = 7000;

app.get('/', (req, res) => res.send('24/7'));

app.listen(port, () => console.log(`Local host => http://localhost:${port}`))




//Index.js//
const { Client, Collection, MessageEmbed } = require('discord.js')

const client = new Client()
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
})



//Command hendler//

client.on('message', async message => {
client.commands = new Discord.Collection();

let archivos = fs.readdirSync("./Programacion/Discord.js/Bot Muffin/").filter((f) => f.endsWith('.js'));


for(var archi of archivos){ 
let comando = require('./Programacion/Discord.js/Bot Muffin/'+archi)
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

try {

 command.run(client, message, args);



} catch (error) {


  console.error(error);
}
});











client.login(process.env.TOKEN_DISCORD)

 
