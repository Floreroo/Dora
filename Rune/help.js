const Discord = require('discord.js')
const client = new Discord.Client();

module.exports = {
  name: "help",
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
                if (reaction.emoji.name === '1️⃣') { 
                    let kulo = new Discord.MessageEmbed()
        .addField("<:VerifiedBotDeveloper:730664032591413299> __**Developers**__", true)
        .addField("> Invitaciones", " \n**Banana**: " + " [Bot](https://discord.com/api/oauth2/authorize?client_id=687102753763229892&permissions=8&scope=bot) ", true)
        .setColor('RANDOM')
        .setFooter('• Srto Kasake#9538', kasake.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
                    msg.edit(kulo)
                }
                if (reaction.emoji.name === '2️⃣') {
                    let dosembed = new Discord.MessageEmbed()
                    .setDescription('En proceso...')
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



