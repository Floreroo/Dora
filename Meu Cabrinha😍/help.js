const Discord = require('discord.js')
const client = new Discord.Client();

module.exports = {
  nombre: "help",
  alias: [],
  descripcion: "Comando de información",
  run: async (client, message, args) => {

    const moment = require('moment')
    require('moment-duration-format');
    let kasake = client.users.cache.get("598550433421590544")
const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");
        let embed = new Discord.MessageEmbed()
           .setTitle('En proceso..')
        message.channel.send(embed).then(msg => { 
            msg.react('1️⃣') 
            msg.react('2️⃣')
            msg.react('🗑')

            msg.awaitReactions((reaction, user) => { 
                if (message.author.id !== user.id) return;
                if (reaction.emoji.name === '⬅') { 
                    let kulo = new Discord.MessageEmbed()
                 
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
        }



