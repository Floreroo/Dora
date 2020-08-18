const express = require('express');
const app = express(); 
const port = 3004;

app.get('/', (req, res) => res.send('24/7'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))




//Index.js//

const Discord = require('discord.js')
const client = new Discord.Client();
const config = require('./config.json')
const db = require('megadb');
const fs = require('fs');
let prefix_db = new db.crearDB('prefixes')

client.on('ready', () => {
client.user.setPresence({
  activity: { name: "???", type: "WATCHING" },
  status: "idle"
  });
});


client.on('message', msg => {
  if(msg.channel.type === "dm") return msg.author.send('No respondo mensajes privados, cualquier problema recuerda usar el comando ``report``')
console.log(msg.member.user.tag +": " + msg.content)
})

//Command hendler//

client.on('message', async message => {
client.commands = new Discord.Collection();

let archivos = fs.readdirSync("./Programacion/Discord.js/Bot Cabrinha/").filter((f) => f.endsWith('.js'));


for(var archi of archivos){ 
let comando = require('./Programacion/Discord.js/Bot Cabrinha/'+archi)
client.commands.set(comando.nombre, comando)
}

   
let prefix;
if(prefix_db.tiene(`${message.guild.id}`)) {
  prefix = await prefix_db.obtener(`${message.guild.id}`)
}else{
  prefix = "c!"
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











client.login(config.muffin)

 