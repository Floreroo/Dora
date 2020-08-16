const Discord = require('discord.js')
const devID = require('./../utils/devs')

module.exports = {
  nombre: "e",
  alias: ["eval"],
  descripcion: "Evalua tu codigo",
  run: async (client, message, args) => {

    if (!["534951970310586378", "598550433421590544"].includes(message.author.id)) return
  let code = args.join(' ')
  if(!code) return message.channel.send('Necesitas evaluar algo').then(m => m.delete({timeout: 4000}))


  try{
    if(args.join(' ').toLowerCase().includes("token")){
    return;
  }
 
  

  let evaluado = await eval(code);
  let tipo = typeof(evaluado)
  let resultado = require("util").inspect(evaluado, { depth: 0 });

const embed1 = new Discord.MessageEmbed()
.setTitle(` 📡Evaluado en` + client.ws.ping + "ms")
.addField("Entrada", `\`\`\`js\n${args.join(' ')}\`\`\``)
.addField("Salida", `\`\`\`js\n${resultado.slice(0, 1024)}\`\`\``)
.addField("Tipo", `\`\`\`js\n${tipo}\`\`\``)
.setTimestamp()
.setFooter(message.member.user.tag,  message.author.displayAvatarURL())
.setColor('RANDOM')
message.channel.send(embed1)

  } catch(err) {
    const embed2 = new Discord.MessageEmbed()
     .setTitle('Error')
        .setColor('ff0000')
        .addField("Codigo", `\`\`\`js\n${code}\`\`\``)
    .addField("Error", `\`\`\`js\n${err}\`\`\``)
    message.channel.send(embed2)
    
     }
}};

