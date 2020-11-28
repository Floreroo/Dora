const Discord = require('discord.js')
module.exports = {
            name: 'eval',
            alias: ["e"],
            description: 'Evalua el codigo',
       async run (client, message, args) {


 const leavefalso = new Discord.MessageEmbed()
 .addField('Ping',  `\`\`\`diff\n- ${client.ws.ping}ms\`\`\``, true)
 .addField("Tipo", `\`\`\`prolog\n${"Trolieado".substring(0, 1).toUpperCase() + "Trolieado".substring(1)}\`\`\``, true)
 .addField("Entrada", `\`\`\`js\n${args.join(' ')}\`\`\``)
 .addField("Salida", `\`\`\`js\ntrue\`\`\``)
 .setTimestamp()
 .setFooter(message.member.user.tag,  message.author.displayAvatarURL())
 .setColor('RANDOM')

    if (!client.devs.id.includes(message.author.id)) return;
  
try {
  let code = args.join(' ')
  if(!code) return message.channel.send('Necesitas evaluar algo').then(m => m.delete({timeout: 4000}))
        
 if(code.toLowerCase().includes("guild.leave()")) return message.channel.send(leavefalso)

    const util = require('util');
    const { clean }  = require('../../util/JS/clean')
  
     
  let output =  await clean(eval(code));
  let type = typeof output;
  if (typeof output !== 'string') {
    output  = util.inspect(output, { depth: 0, maxStringLength: 1950});
    
  }



  if (output.length >= 1020) {
    output = `${output.substr(0, 1010)}...`;
}
            
      
     
 
const embed1 = new Discord.MessageEmbed()
.addField('Ping',  `\`\`\`diff\n- ${client.ws.ping}ms\`\`\``, true)
.addField("Tipo", `\`\`\`prolog\n${type.substring(0, 1).toUpperCase() + type.substring(1)}\`\`\``, true)
.addField("Entrada", `\`\`\`js\n${args.join(' ')}\`\`\``)
.addField("Salida", `\`\`\`js\n${output.replace(process.env.TOKEN, '...')}\`\`\``)
.setTimestamp()
.setFooter(message.member.user.tag,  message.author.displayAvatarURL())
.setColor('RANDOM')
message.channel.send(embed1).then(m => {
  m.react('❌')

  m.awaitReactions(
   async (reaction, user) => {
     
         if (message.author.id !== user.id) return;
        if (reaction.emoji.name === '❌') { 
          m.delete()
        }
      })
});
    
  } catch(err) {

    const embed2 = new Discord.MessageEmbed()
     .setTimestamp()
        .setColor('ff0000')
        .addField("Tipo", `\`\`\`js\n${err.name}\`\`\``)
        .addField("Codigo", `\`\`\`js\n${args.join(" ")}\`\`\``)
        .setFooter(message.member.user.tag,  message.author.displayAvatarURL())
    .addField("Error", `\`\`\`js\n${err.message}\`\`\``)
    message.channel.send(embed2).then(m => {
      m.react('❌')

      m.awaitReactions(
       async (reaction, user) => {
         
             if (message.author.id !== user.id) return;
            if (reaction.emoji.name === '❌') { 
              m.delete()
            }
          })
    });

  
  } 
}}