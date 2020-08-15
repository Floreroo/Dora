const Discord = require('discord.js')
const client = new Discord.Client();
const config = require('./config.json')
const prefix = "."
const args = message.content.slice(prefix.length).trim().split(/ +/);
const cmd = args.shift().toLowerCase();

if(cmd == 'help'){
    
    let kasake = client.users.cache.get("598550433421590544")
        let embed = new Discord.MessageEmbed()
           .setTitle('En proceso..')
        message.channel.send(embed).then(msg => { 
            msg.react('⚙')
            msg.react('💡')
            msg.react('❌')

            msg.awaitReactions((reaction, user) => { 
                if (message.author.id !== user.id) return;
                if (reaction.emoji.name === '') { 
                    let kulo = new Discord.MessageEmbed()
                    .addField('')
                    .setFooter(kasake.displayName + kasake.displayAvatarURL())
                    msg.edit(kulo)
                }
                if (reaction.emoji.name === '➡') {
                    let dosembed = new Discord.MessageEmbed()
                    .setDescription('')
                    .setColor('RANDOM')
                    msg.edit(dosembed)
                }

            if (reaction.emoji.name === '🗑') {
                msg.delete()
            }

           });
          }); 
          }

client.login(config.token)