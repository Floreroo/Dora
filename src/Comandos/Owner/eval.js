const Discord = require('discord.js')
const { Kasake, Melphi, ZorGame} = require('../../../util/devs')
module.exports = {
            name: 'eval',
            alias: ["e"],
            description: 'Evalua el codigo',
       async run (client, message, args) {


 //embed de token falso xd//
const tokenfalso = new Discord.MessageEmbed()
 .setTitle(`Evaluado en ` + client.ws.ping +"ms")
 .addField("Tipo", `\`\`\`js\n${'Trolieado'}\`\`\``)
 .addField("Entrada", `\`\`\`js\n${args.join(' ')}\`\`\``)
 .addField("Salida", `\`\`\`js\n${'ljcnkdjcnkfvnflejnfe.2dfndffefn :D'}\`\`\``)
 .setTimestamp()
 .setFooter(message.member.user.tag,  message.author.displayAvatarURL())
 .setColor('RANDOM')


    //embed de token falso xd//



      
   if(![Kasake, Melphi, ZorGame].includes(message.author.id)) return
  

  let code = args.join(' ')
  if(!code) return message.channel.send('Necesitas evaluar algo').then(m => m.delete({timeout: 4000}))

  try{
    if(args.join(' ').toLowerCase().includes('token')){
     return message.channel.send(tokenfalso)
    }
    
  
  

    const util = require('util');
  function clean(text) {
  if (typeof text === 'string')
  return text
  .replace(/`/g, '`' + String.fromCharCode(8203))
  .replace(/@/g, '@' + String.fromCharCode(8203))
  else return text
          
  }
          

       
  let output =  clean(await eval(code));
  let type = typeof output;
  if (typeof output !== 'string') {
    output  = util.inspect(output, { depth: 0, maxStringLength: 1950});
  }

    /*
  if (output.length >= 1022) {
  console.log(output)
  let long = new Discord.MessageEmbed()
  .setDescription(`\`\`\`fix\nMucho Texto (${output.length} caracteres)\n\`\`\``)
  .setColor('RANDOM')
  message.channel.send(long)
  }
  */
      
     
      

       
const embed1 = new Discord.MessageEmbed()
.setTitle(`Evaluado correctamente`)
.addField('Ping',  `\`\`\`diff\n- ${client.ws.ping}ms\`\`\``, true)
.addField("Tipo", `\`\`\`prolog\n${type.substring(0, 1).toUpperCase() + type.substring(1)}\`\`\``, true)
.addField("Entrada", `\`\`\`js\n${args.join(' ')}\`\`\``)
.addField("Salida", `\`\`\`js\n${output.length > 1024 ? output.slice(0, 1010) : output}\`\`\``)
.setTimestamp()
.setFooter(message.member.user.tag,  message.author.displayAvatarURL())
.setColor('RANDOM')
message.channel.send(embed1)

  } catch(err) {
    const embed2 = new Discord.MessageEmbed()
     .setTitle('Error')
     .setTimestamp()
        .setColor('ff0000')
        .addField("Tipo", `\`\`\`js\n${err.name}\`\`\``)
        .addField("Codigo", `\`\`\`js\n${code}\`\`\``)
        .setFooter(message.member.user.tag,  message.author.displayAvatarURL())
    .addField("Error", `\`\`\`js\n${err.message}\`\`\``)
    message.channel.send(embed2)
    
  } 
}}