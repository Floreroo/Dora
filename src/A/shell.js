const { Kasake, Melphi, ZorGame} = require('../../util/devs')


   module.exports = {
            name: 'shell',
            description: 'npm',
           alias: ["sh"],
         run: (client, message, args) => {

 const Discord = require('discord.js');
 const { exec } = require('child_process')

        if(![Kasake, Melphi, ZorGame].includes(message.author.id)) return

        let code = args.join(' ')
if(!code) return;

exec(code, (err, stdout, stderr) => {

let enved = new Discord.MessageEmbed()
.addField('Errores/Warns', `\`\`\`fix\n${err ? err : 'Ninnguno'}\`\`\``, true)
.addField('Ejecutado en:', `\`\`\`yaml\n${client.ws.ping}ms\`\`\``, true)
.addField('Input', `\`\`\`\n${code}\`\`\``)
.addField('Output', `\`\`\`\n${stdout}\n\n${stderr}\`\`\``)
.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
.setColor('RANDOM')
message.channel.send(enved)
})

    }
}
