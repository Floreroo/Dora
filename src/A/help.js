const Discord = require('discord.js');

module.exports = {
            name: 'help',
            description: 'Comando de informacion',
            alias: ["comandos"],
            async run (client, message, args, prefix) {
            
        let embed2 = new Discord.MessageEmbed()
        .setAuthor('INFORMACION', message.guild.iconURL())
        .setFooter(message.member.user.tag, message.author.displayAvatarURL())  
        .addField('Escoje uno \n \n \n \n', "⚙ Configuracion\n" + "\n 😂 Diversion\n" + "\n 🔋 Utilidad", true)
        .setColor('RANDOM')

       if(args[0]){

       if(args[0] === "config"){
        let embed3 = new Discord.MessageEmbed()
        .addField("Configuracion", "`setprefix`, `\nsetwelcome`")
        .setColor('RANDOM')
        message.channel.send(embed3)
       }

     if(args[0] === "fun"){
        let embed4 = new Discord.MessageEmbed()
        .addField("Diversion", "`8ball`, `\nsay` `\nsayimage`")
        .setColor('RANDOM')
        message.channel.send(embed4)
     }

     if(args[0] === "util"){
        let embed5 = new Discord.MessageEmbed()
        .addField("Utilidad",  "`avatar`  `\nbotinvite`  `\nping`  `\nserver`  `\nuser`  `\nrolelist`  `\nstats`")
        .setColor('RANDOM')
        message.channel.send(embed5)
     }

       }
            }
        }