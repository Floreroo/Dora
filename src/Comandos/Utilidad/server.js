const Discord = require('discord.js');


module.exports = {
            name: 'server',
            description: 'Muestra la informacion del servidor',
            alias: ["s-i", "serverinfo"],
            run: (client, message, args) => {


    let region = {
          europe: "Europa :flag_eu:",
          brazil: "Brasil :flag_br: ",
          hongkong: "Hong Kong :flag_hk:",
          japan: "Japón :flag_jp:",
          russia: "Rusia :flag_ru:",
          singapore: "Singapur :flag_sg:",
          southafrica: "Sudáfrica :flag_za:",
          sydney: "Sydney :flag_au:",
          "us-central": "Central US :flag_us:",
          "us-east": "Este US :flag_us:",
          "us-south": "Sur US :flag_us:",
          "us-west": "Oeste US :flag_us:",
          "vip-us-east": "VIP US Este :flag_us:",
          "eu-central": "Europa Central :flag_eu:",
          "eu-west": "Europa Oeste :flag_eu:",
          london: "London :flag_gb:",
          amsterdam: "Amsterdam :flag_nl:",
          india: "India :flag_in:"
        }

        const server = message.guild
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(server.iconURL())
        .setAuthor(server.name, server.iconURL())
        .addField('ID', server.id, true)
        .addField('Owner', server.owner.user.tag, true)
    .addField('Canales',  server.channels.cache.filter(m => m.type === 'text').size + " texto" + " / " + server.channels.cache.filter(c => c.type === 'voice').size + " voz", true)
        .addField('Miembros', server.memberCount, true)
        if(server.emojis){
        embed.addField('Emojis', server.emojis.cache.size, true)
        }        
        embed.addField("Roles", server.roles.cache.size, true)

        embed.addField('Canales(Total)', server.channels.cache.size, true)
        if (server.systemChannel) {
          embed.addField("Canal de sistema", server.systemChannel.toString(), true)
          }
        embed.addField('Region', `${region[server.region]}`, true)
        .addField('Nivel de verificación',  server.verificationLevel , true)
        .addField('Creado el', server.createdAt.toHourString(), true)
        .addField('Status', ` <a:online:751961662470357083> ${[server.members.cache.filter(c => c.presence.status === 'online').size]} | <a:idle:751961722318749737> ${[server.members.cache.filter(c => c.presence.status === 'idle').size]} | <a:dnd:751961774525251684> ${[server.members.cache.filter(c => c.presence.status === 'dnd').size]} | <a:offline:751961827033874512> ${[server.members.cache.filter(c => c.presence.status === 'offline').size]} | <a:streaming:751961890946678924> ${[server.members.cache.filter(c => c.presence.status === 'streaming').size]} ` , true)
      message.channel.send(embed)
      }
  }

  