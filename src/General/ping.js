const Discord = require('discord.js');
 module.exports = {
  nombre: "ping",
  alias: ["p"],
  descripcion: "Te dice el ping",
  run: (client, message, args) => {

  
    if(message.author.bot) return;
   message.channel.send('> Espere un momentito...').then(m => {
   setTimeout(() => {
   m.edit(`> Mi ping es de ${client.ws.ping}ms`)

   }, 2000) 
 })
}
 }
  

