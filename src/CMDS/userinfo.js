const Discord = require('discord.js');
const { userInfo } = require('os');

const Base = require('../../base/Commands')

class UsErInFo extends Base {
    constructor(client){
        super(client, {
            name: 'user',
            description: 'Muestra la informacion de un usuario',
            usage: 'userinfo <mencion/id/tu>',
            category: 'Informacion',
            cooldown: 2000,
            alias: ["u-i"],
            permLevel: 0,
            permission: "READ_MESSAGES"

        })
    }
    
async run(message, args) {
 

 const owo = message.mentions.users.first() || client.users.cache.get(args[0]) ||message.author;
 const server = message.guild

    let presencestatus = {
      "online":" <a:online:733410559965265921> | En linea",
      "idle":"<a:idle:733410335091851327> | Ausente",
      "dnd":"<a:dnd:733410068367671360> | No Molestar",
      "invisible":"<a:offline:733410777599442964> | Invisible/Desconectado",
    }
 
    const ptype = {
      PLAYING: "Jugando a",
      LISTENING: "Escuchando",
      WATCHING: "Viendo",
      STREAMING: "Transmitiendo ",
      CUSTOM_STATUS: "Custom status:"
    };
 
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
        ptext += ptype[npresence.type] + "\n";
        if (npresence.emoji) ptext += npresence.emoji.toString() + " ";
        if (npresence.state) ptext += npresence.state;
        ptext += "\n";
      } else {
        if (npresence.state) {
          ptext += "\n" + npresence.state;
        }
        if (npresence.assets) {
          if (npresence.assets.largeText)
            ptext += "\n" + npresence.assets.largeText;
          if (npresence.assets.smallText)
            ptext += "\n" + npresence.assets.smallText;
        }
        ptext += "\n";
      }
    }
  } else ptext = "No tiene";


  
const miembro = await message.guild.members.fetch(owo);

    const uo = new Discord.MessageEmbed()
    uo.setAuthor(owo.tag, owo.displayAvatarURL({dynamic: true}))

    .addField('Ping', "\n" + owo.toString() ,true)

    .addField('ID', owo.id, true)

    .addField("Apodo", message.guild.member(owo).nickname != null ? message.guild.member(owo).nickname : "No tiene.", true)

    .addField('Bot?', owo.bot ? "Si" : "No", true)

    .addField('Role destacado', message.guild.member(owo).roles.highest.toString(), true)

    .addField("Presencia",  owo.presence.activities[0].name || 'Nada.', true)

 
    uo.addField(`Status`,` ${presencestatus[owo.presence.status]}`, true)

    uo.addField('Insignias', `${owo.flags.toArray().length < 1 ? `No tiene` : owo.flags.toArray().map(e => badges[e]).join(' ')}`, true)
    
    uo.addField(`Ha entrado en ${server.name}`, miembro.joinedAt, true)

    .addField('Se ha logeado en discord', owo.createdAt, true)

    .addField('Roles', `${miembro.roles.cache.map(c => c.toString()).join(' | ')}`)

    .setThumbnail(owo.displayAvatarURL({dynamic: true}))

    .setColor('RANDOM')

  message.channel.send(uo)
  

     
     }
  }


  module.exports = UsErInFo