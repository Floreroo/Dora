const { Kasake, Melphi, ZorGame} = require('../../util/devs')
const Base = require('../../base/Commands')

class shell extends Base {
    constructor(client){
        super(client, {
            name: 'shell',
            description: 'npm',
            usage: 'shell',
            category: 'Dev',
            cooldown: 2000,
            alias: ["sh"],
            permLevel: 0,
            permission: "READ_MESSAGES"

        })
    }
    
run(message, args) {
        
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

module.exports = shell