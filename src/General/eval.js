const Discord = require('discord.js')
const { Kasake, Melphi, ZorGame, ANTHO } = require('../../util/devs')
const { DevReturn } = require('../../util/Perms')

module.exports = {
  nombre: "eval",
  alias: ["e"],
  descripcion: "Evalua tu codigo",
  run: async (client, message, args) => {



 //embed de token falso xd//
const tokenfalso = new Discord.MessageEmbed()
 .setTitle(`Evaluado en ` + client.ws.ping +"ms")
 .addField("Tipo", `\`\`\`js\n${'Trolieado'}\`\`\``)
 .addField("Entrada", `\`\`\`js\n${args.join(' ')}\`\`\``)
 .addField("Salida", `\`\`\`js\n${'cdvfgetwgse.Tefrgwegwd2 :D'}\`\`\``)
 .setTimestamp()
 .setFooter(message.member.user.tag,  message.author.displayAvatarURL())
 .setColor('RANDOM')


    //embed de token falso xd//


   if(![Kasake, Melphi, ZorGame, ANTHO].includes(message.author.id)) return message.channel.send('No tienes permisos para usar este comando')
  

  let code = args.join(' ')
  if(!code) return message.channel.send('Necesitas evaluar algo').then(m => m.delete({timeout: 4000}))


  try{
    if(args.join(' ').toLowerCase().includes('token')){
     return message.channel.send(tokenfalso)
        }
 
  
   
  
  

  let evaluado = await eval(code);
  let tipo = typeof(evaluado)
  let resultado = require("util").inspect(evaluado, { depth: 0 });

const embed1 = new Discord.MessageEmbed()
.setTitle(`Evaluado en ` + client.ws.ping +"ms")
.addField("Tipo", `\`\`\`js\n${tipo}\`\`\``)
.addField("Entrada", `\`\`\`js\n${args.join(' ')}\`\`\``)
.addField("Salida", `\`\`\`js\n${resultado.slice(0, 1050)}\`\`\``)
.setTimestamp()
.setFooter(message.member.user.tag,  message.author.displayAvatarURL())
.setColor('RANDOM')
message.channel.send(embed1)

  } catch(err) {
    const embed2 = new Discord.MessageEmbed()
     .setTitle('Error')
     .setTimestamp()
        .setColor('ff0000')
        .addField("Codigo", `\`\`\`js\n${code}\`\`\``)
        .setFooter(message.member.user.tag,  message.author.displayAvatarURL())
    .addField("Error", `\`\`\`js\n${err}\`\`\``)
    message.channel.send(embed2)
    
     }
}};

