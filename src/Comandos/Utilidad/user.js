const Discord = require('discord.js');


module.exports = {
            name: 'user',
            description: 'Muestra la informacion de un usuario',
            alias: ["u-i", "userinfo"],
           async run (client, message, args) {

 

 const owo = message.mentions.users.first() || client.users.cache.get(args[0]) || client.users.cache.find(x => x.tag === args[0]) || message.author;
 const server = message.guild

    let presencestatus = {
      "online":"<a:online:751961662470357083> | En linea",
      "idle":"<a:idle:751961722318749737> | Ausente",
      "dnd": "<a:dnd:751961774525251684>| No Molestar",
      "offline": "<a:offline:751961827033874512> | Offline",
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
      "VERIFIED_BOT":"<:Bot:750347018106306590>"
      
  }

  var ptext = "";
  if (owo.presence.activities && owo.presence.activities[0]) {
    for (const npresence of Object.values(owo.presence.activities)) {
      if (npresence.type == "CUSTOM_STATUS") {
        if (npresence.state) ptext +=  npresence.state + " | ";
        if(npresence.emoji) ptext += npresence.emoji.toString() + " | ";

     } else {
     if(npresence.name) ptext += npresence.name + " | ";

        }
        ptext + "\n";
      }
  } else ptext = "No tiene";


  
const miembro = await message.guild.members.fetch(owo);

try{
    const uo = new Discord.MessageEmbed()
    uo.setAuthor(owo.tag, owo.displayAvatarURL({dynamic: true}))

    .addField('Ping', "\n" + owo.toString() ,true)

    .addField('ID', owo.id, true)

    .addField("Apodo", message.guild.member(owo).nickname != null ? message.guild.member(owo).nickname : "No tiene.", true)

    .addField('Bot?', owo.bot ? "Si" : "No", true)
    
    uo.addField('Insignias', `${owo.flags.toArray().length < 1 ? `No tiene` : owo.flags.toArray().map(e => badges[e]).join(' ')}`, true)

    .addField('Role destacado', message.guild.member(owo).roles.highest.toString(), true)
    
    uo.addField(`Status`,` ${presencestatus[owo.presence.status]}`, true)

    .addField("Presencia",  ptext.slice(0, 1010) , true)
 
    uo.addField(`Ha entrado en ${server.name}`, miembro.joinedAt.toLocaleString("es"), true)

    .addField('Se ha logeado en discord', owo.createdAt.toLocaleString("es"), true)

    .addField('Roles', `${miembro.roles.cache.map(c => c.toString()).join(' | ')}`)

    .setThumbnail(owo.displayAvatarURL({dynamic: true}))

    .setColor('RANDOM')

  message.channel.send(uo)
  
} catch(err) {
  message.channel.send("Se ha producido un error al buscar este usuario: "+ err)
}
     }
    }


  