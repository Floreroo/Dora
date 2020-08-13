const Discord = require('discord.js');
const client = new Discord.Client()
const cooldown = new Set()
 
client.on('message',(message) => {
    if(message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
   message.channel.send('Espere un momentito').then(m => {
   setTimeout(() => {
   m.edit(`Mi ping es de: \`${m.createdTimestamp - message.createdTimestamp} ms\``)
   }, 4000)
   });
 }
  });

