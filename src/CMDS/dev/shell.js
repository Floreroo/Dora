const { Kasake, Melphi, ZorGame} = require('../../../util/devs')
module.exports = {
    nombre: "shell",
    alias: ["s"],
    run: async (client, message, args) => {

        
 const Discord = require('discord.js');
 const { exec } = require('child_process')

        if(![Kasake, Melphi, ZorGame].includes(message.author.id)) return

        let code = args.join(' ')
if(!code) return;

exec(code, (err, stdout, stderr) => {

let enved = new Discord.MessageEmbed()
.setAuthor(`Ejecutado por: ${message.author.username}`)
.addField('Warns/Errors', `\`\`\`fix\n${err ? err : 'Nothing'}\`\`\``, true)
.addField('Ejecutado en:', `\`\`\`yaml\n${client.ws.ping}ms\`\`\``, true)
.addField('Input', `\`\`\`\n${code}\`\`\``)
.addField('Output', `\`\`\`\n${stdout}\n\n${stderr}\`\`\``)
.setColor('RANDOM')
message.channel.send(enved)
})

    }
}