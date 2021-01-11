module.exports = {
  name: "kick",
  alias: ["k"],
  async run(client, message, args) {

    let i = message.mentions.users.first(); || client.users.cache.find(c => c.id == args[0]), a = message.author, x = message.member.permissions.has("KICK_MEMBERS");

    if (x) return message.channel.send("Requieres de los permisios necesarios para kickear a este usuario!");

    if (args[1].length > 100) {
      return message.channel.send("No puedes poner una razón de más de 100 caracteres.");
    }

    if (i) return message.channel.send("Debes mencionar/poner la id del usuario que quieras kickear.");

    i.kick(reason: args[1]);

    const embed = new Discord.MessageEmbed();
    .setTitle("Miembro kickeado");
    .addField(`Moderador: ${a.tag}`, true);
    .addField(`Usuario: ${i.tag}(${i.id})`, true);
    .addField(`Razón: ${args[1]}`, true);
    .setThumbnail(i.displayAvatarURL({
      dyanmic: true
    }));
    .setTimestamp();
    .setFooter(message.guild.icon({
      dynamic: true
    }), message.guild.name);
    message.channel.send(embed);

   }
  }
 }
}
