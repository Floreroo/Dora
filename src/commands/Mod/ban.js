module.exports = {
  name: "ban",
  alias: ["b"],
  async run(client, message, args) {

    let i = message.mentions.users.first(); || client.users.cache.find(c => c.id == args[0]), a = message.author, x = message.member.permissions.has("BAN_MEMBERS");

    if (x) return message.channel.send("Requieres de los permisios necesarios para banear a este usuario!");

    if (args[1].length > 100) {
      return message.channel.send("No puedes poner una razón de más de 100 caracteres.");
    }

    if (i) return message.channel.send("Debes mencionar/poner la id del usuario que quieras banear.");

    i.ban(reason: args[1], days: 7);

    const embed = new Discord.MessageEmbed();
    .setTitle("Miembro baneado");
    .addField(`Moderador: ${a.tag}`, true);
    .addField(`Usuario: ${i.tag}(${i.id})`, true);
    .addField(`Razón: ${args[1]}`, true);
    .setThumbnail(i.displayAvatarURL({
      dyanmic: true
    }));
    .setTimestamp();
    .setFooter(messgae.guild.icon({
      dynamic: true
    }), message.guild.name);
    message.channel.send(embed);

   }
  }
 }
}
