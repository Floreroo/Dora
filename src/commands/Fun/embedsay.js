const Discord = require('discord.js');

module.exports = {
    name: 'embedsay',
    description: 'Di algo!',
    alias: ["esay", "sayembed"],
    async  run (client, message, args) {


    if(!args[0]) return message.channel.send("> Di algo! ")
            
    let embed = new Discord.MessageEmbed()
    .setDescription(args.join(" "),  {disableMentions: 'all'})
    .setColor("RANDOM")
    message.channel.send(embed);
    message.delete()
 } 
}


        
          