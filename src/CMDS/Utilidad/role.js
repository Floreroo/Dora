const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "role",
    alias: ["r-i"],
    async run (client, message, args) {

     //A

    //B
  

       let a = message.guild.roles.resolve(args[0]) || message.mentions.roles.first() || message.member.roles.highest
      
   let todos = a.members.size;
   let bots = a.members.filter(c => c.user.bot).size;
let permizos = a.permissions.toArray();

if (permizos.indexOf('ADMINISTRATOR') === -1) {
    var coño = permizos.join(' | ') || "A";
  } else {
    var coño = 'ADMINISTRADOR';
  }
  


        let embed = new MessageEmbed()
        .setDescription(`Esta es la informacion de \*\*${a.name}\*\*`)
        .addField("Id", a.id, true)
        .addField("Ping", a.toString(), true)
        .addField("Creado el", a.createdAt.toLocaleString("es"), true)
        .addField("Color", a.hexColor, true)
        .addField("Miembros", todos || "No tiene", true)
        .addField("Bots", bots ? bots : "No tiene", true)
        .addField("Permisos",  `\`\`${coño}\`\``, true)
        .addField("Posicion", a.rawPosition, true)
        .setFooter("UTILIDAD", message.guild.iconURL())
        .setColor(a.hexColor)
        message.channel.send(embed)
    }
}