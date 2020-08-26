const Discord = require('discord.js');

  module.exports = {
      nombre: "serverinfo",
      alias: ["s-i"],
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
        let roles = message.guild.roles.cache.map(x => x.toString()).join(" | ")
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(server.iconURL())
        .setAuthor(server.name, server.iconURL())
        .addField('ID', server.id, true)
        .addField('Owner', server.owner.user.tag, true)
        .addField('Canales',  server.channels.cache.filter(m => m.type === 'text').size + "/" + server.channels.cache.filter(c => c.type === 'voice').size, true)
        .addField('Miembros', server.memberCount, true)
        .addField('Emojis', server.emojis.cache.size, true)
        .addField('Canales(Total)', server.channels.cache.size, true)
        .addField('Region', `${region[server.region]}`, true)
        .addField('Nivel de verificación',  server.verificationLevel, true)
        if (server.systemChannel) {
        embed.addField("Canal de sistema", server.systemChannel.toString(), true)
        }
        embed.addField('Creado el', server.createdAt.toDateString(), true)
        .addField('Status', `<a:online:733410559965265921>online: ${server.members.cache.filter(c => c.presence.status === 'online').size}\n<a:idle:733410335091851327>idle: ${server.members.cache.filter(c => c.presence.status === 'idle').size}\n<a:dnd:733410068367671360>dnd: ${server.members.cache.filter(c => c.presence.status === 'dnd').size}\n<a:offline:733410777599442964>offline: ${server.members.cache.filter(c => c.presence.status === 'offline').size}` , true)
        .addField("Roles", roles.length > 1000 ? roles.slice(0, 1000)  + "\n Y muchos mas" : roles)
      message.channel.send(embed)
      }
  }