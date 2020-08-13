const Discord = require('discord.js')
const client = new Discord.Client();
const config = require('./config.json')
const db = require('megadb');
const fs = require('fs');
let prefix_db = new db.crearDB('prefixes')



//Command hendler//



client.commands = new Discord.Collection();

let archivos = fs.readdirSync("./Rune/").filter((f) => f.endsWith('.js'));


for(var archi of archivos){ 
let comando = require('./Rune/'+archi)
client.commands.set(comando.name, comando)
}



//Prefixes//
client.on('message', async message => {

  let prefix;
  if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)
  }else{
    prefix = "r!"
  }
  
  if(!message.content.startsWith(prefix)) return;
  
  let wergdesfgdtrgh = message.content.slice(prefix.length).trim().split(/ +/g);
let adsmcnsdlcnslk = wergdesfgdtrgh.shift().toLowerCase();
if(adsmcnsdlcnslk  =='setprefix'){
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('No tienes los permisos `ADMINISTRADOR`')
if(!wergdesfgdtrgh[0]) return message.channel.send('> Necesitas colocar el prefix')
prefix_db.establecer(`${message.guild.id}`, wergdesfgdtrgh[0])
return message.channel.send(`> El nuevo prefix en este servidor es` + " " + "``"+ wergdesfgdtrgh[0] + "``")
}


const args = message.content.slice(prefix.length).trim().split(/ +/);
const commandName = args.shift().toLowerCase();

const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
if (!command) return;

try {

  command.run(client, message, args);



} catch (error) {


  console.error(error);
}
});


client.login(config.token);
console.log(`Inciando sesión como Rune xd`)
console.log(`Numero de comandos, ${client.commands.size}`)
console.log('Lets fucking go!')  