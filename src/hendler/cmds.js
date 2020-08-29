const Discord = require("discord.js");
const client = new Discord.Client()
const fs = require('fs');
require('dotenv').config()
const ascii = require('ascii-table');
let table = new ascii('Commands');
table.setHeading('Command', 'Load status')

const ModelPrefix = require('../database/models/Prefix')

client.commands = new Discord.Collection();


client.on('message', async message => {

let obt = await ModelPrefix.findOne({guildID: message.guild.id}).exec()
let prefix = obt ? obt.prefix : "m!"
             
if(!message.content.startsWith(prefix)) return;


//CMDS//
  const load = dirs => {
    let archivos = fs.readdirSync(`./src/CMDS/${dirs}`).filter((f) => f.endsWith('.js'));
    
    
    for(var archi of archivos){ 
    let comando = require(`../src/CMDS/${dirs}/${archi}`)

    client.commands.set(comando.nombre, comando)
    if(comando.nombre){
  
   table.addRow(archi, "✅");

    }else{
    
    table.addRow(archi, "❌")
  continue
    }

    if (archi.alias)
				carpeta.alias.forEach(a =>
					client.alias.set(a, carpeta.nombre)
			 ); 
				
		} 
	};

  const args = message.content.slice(prefix.length).trim().split(/ +/);
const commandName = args.shift().toLowerCase();
const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.alias && cmd.alias.includes(commandName));
if (!command) return;

//COSas/
try {

 command.run(client, message, args);



} catch (error) {
 console.error(error)
}

  ['utiles', 'informacion', 'imagen', 'divertidos', 'dev',"configuracion"].forEach(x => load(x));
});
  client.login(process.env.DISCORD_TOKEN)