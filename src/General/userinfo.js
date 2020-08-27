const Discord = require('discord.js')

  module.exports = {
    name: "userinfo",
    alias: ["u-i"],
    run: async (client, message, args) => {

 
    let presencestatus = {
        online: "Online <a:online:733410559965265921>",
        idle: "Idle <a:idle:733410335091851327>",
        dnd: "Dnd <a:dnd:733410068367671360>",
        offline: "Offline <a:offline:733410777599442964>"
    }
 
 
    const badges = {
    
      "EARLY_SUPPORTER":"<:DiscordNitroEarlySupporter:730664032662585414>",
      "DISCORD_EMPLOYEE": "<:DiscordStaff:730664032419315773>",
      "DISCORD_PARTNER":"<:DiscordPartner:730664032675299358>",
      "HYPESQUAD_EVENTS":"<:HypeSquad:730664032096354406>",
      "HOUSE_BRAVERY":" <:HypeSquadBravery:730664032792608849>",
      "HOUSE_BRILLIANCE":"<:HypeSquadBrilliance:730664032423379004>",
      "BUGHUNTER_LEVEL_1":"<:DiscordBugHunter:730664032305938444>",
      "BUGHUNTER_LEVEL_2":"<:9552_BugHunterLvl2:735355374999306311>",
      "VERIFIED_DEVELOPER":"<:VerifiedBotDeveloper:730664032591413299>",
      "HOUSE_BALANCE": " <:HypeSquadBalance:730664031937101921>",
      "TEAM_USER":"<:Team_User:740667003479785534>",
      "VERIFIED_BOT":"<:Bot:741007909990694962>"
      
  }

    
    const owo = message.mentions.users.first() || client.users.cache.get(args[0]) ||message.author;
    const server = message.guild

const miembro = await message.guild.members.fetch(owo);
    const uo = new Discord.MessageEmbed()
    uo.setAuthor(owo.tag, owo.displayAvatarURL({dynamic: true}))
    .addField('Ping', "\n" + owo.toString() ,true)
    .addField('ID', owo.id, true)
    .addField("Apodo", message.guild.member(owo).nickname != null ? message.guild.member(owo).nickname : "No tiene.", true)
    .addField('Bot?', owo.bot ? "Si" : "No", true)
    .addField('Role destacado', message.guild.member(owo).roles.highest.toString(), true)
    .addField(`Status`,` ${presencestatus[owo.presence.status]}`, true)
    uo.addField('Insignias', `${owo.flags.toArray().length < 1 ? `No tiene` : owo.flags.toArray().map(e => badges[e]).join(' ')}`, true)
    uo.addField(`Ha entrado en ${server.name}`, miembro.joinedAt, true)
    .addField('Se ha logineado en discord', owo.createdAt)
    .addField('Roles', `${miembro.roles.cache.map(c => c.toString()).join(' | ')}`, true)
    .setThumbnail(owo.displayAvatarURL({dynamic: true}))
    .setColor('RANDOM')
  message.channel.send(uo)

     
     }
  }
