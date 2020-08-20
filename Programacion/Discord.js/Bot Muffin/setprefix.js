const Discord = require('discord.js');
const db = require('megadb');
let prefix_db = new db.crearDB('prefixes')
 module.exports = {
   nombre: "setprefix",
   alias: ["prefix"],
   run: async (client, message, args) => {

    
  let prefix;
  if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)
  }else{
    prefix = "c!"
  }
  
  if(!message.content.startsWith(prefix)) return;
  
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('No tienes los permisos `ADMINISTRADOR`')
if(!args[0]) return message.channel.send('> Necesitas colocar el prefix')
prefix_db.establecer(`${message.guild.id}`, args[0])
return message.channel.send(`> El nuevo prefix en este servidor es` + " " + "``"+ args[0] + "``")
}


   }
