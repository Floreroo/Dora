const Discord = require('discord.js');

  module.exports = {
      nombre: "server",
      alias: ["s-i"],
      cooldown: 5,
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
       let roles = message.guild.roles.cache.filter(x => !x.managed).map(x => x).sort((a, b) => b.position - a.position || parseInt(a.id.slice(0, -10)) - parseInt(b.id.slice(0, -10)) || parseInt(a.id.slice(10)) - parseInt(b.id.slice(10)).first(2)[1]).join(" | ")
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
        embed.addField('Canales(Total)', server.channels.cache.size, true)
        .addField('Region', `${region[server.region]}`, true)
        .addField('Nivel de verificación',  server.verificationLevel, true)
        if (server.systemChannel) {
        embed.addField("Canal de sistema", server.systemChannel.toString(), true)
        }
        embed.addField('Creado el', server.createdAt.toString(), true)
        .addField('Status', `<a:online:733410559965265921> ${server.members.cache.filter(c => c.presence.status === 'online').size} | <a:idle:733410335091851327> ${server.members.cache.filter(c => c.presence.status === 'idle').size} | <a:dnd:733410068367671360>  ${server.members.cache.filter(c => c.presence.status === 'dnd').size} | <a:offline:733410777599442964> ${server.members.cache.filter(c => c.presence.status === 'offline').size} | <a:streaming:733411025118036009> ${server.members.cache.filter(c => c.presence.status === 'streaming').size} ` , true)
        .addField("Roles", roles.length > 1000 ? roles.slice(0, 1000)  + "\n Y muchos mas" : roles)
      message.channel.send(embed)
      }
  }