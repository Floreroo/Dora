module.exports = async (client, server) => {
  
    const Discord = require('discord.js')

    let canal = client.channels.cache.find(c => c.name === "「📣」server-join")
    if(!canal) return

    

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



    let embed = new Discord.MessageEmbed()
    .setAuthor(server.name, server.iconURL())
    .setThumbnail(server.iconURL())
    .addField('ID', server.id, true)
    .addField('Owner', server.owner.user.tag, true)
    .addField('Canales',  server.channels.cache.filter(m => m.type === 'text').size + " texto" + " / " + server.channels.cache.filter(c => c.type === 'voice').size + " voz", true)
    .addField('Miembros', server.memberCount, true)
    if(server.emojis){
    embed.addField('Emojis', server.emojis.cache.size, true)
    }        
    embed.addField('Canales(Total)', server.channels.cache.size, true)
    .addField('Region', `${region[server.region]}`, true)
    .addField("Owner", server.owner.user.tag, true)
    .addField("Server Count", client.guilds.cache.size, true)
    .setColor("RANDOM")
    canal.send(embed)
  }