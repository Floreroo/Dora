/* module.exports = {
  name: "ban",
  alias: ["b"],
  async run(client, message, args) {

    let id =  client.users.cache.find(c => c.id == args[0]);
    let a = message.author;
    let x = message.member.hasPermission("KICK_MEMBERS");
    let w = message.guild.me.hasPermission("KICK_MEMBERS");

    if (!x) return message.channel.send("Requieres de los permisios necesarios para banear a este usuario!");

    if (!w) return message.channel.send("Requiero de los permisios necesarios para banear a este usuario!");

    if (id && args[0]) return message.channel.send("Debes poner la id del usuario que quieras banear.");

    if (!args[1]) return message.channel.send("Debes ingresar la razón del baneo");

    if (id == message.author.id) return message.channel.send('Existe la opción "Salir Del servidor"');

    if (args[1].length > 100) return message.channel.send("No puedes poner una razón de más de 100 caracteres.");

    let member = await client.users.fetch(id)
    message.guild.members.ban(member.id)

    const embed = new Discord.MessageEmbed()
      .setTitle("Miembro Baneado")
      .addField("Moderador: " + a.tag + "("+a.id+")", true)
      .addField("Usuario: " + member.tag + "("+member.id+")", true)
      .addField("Razón: "+  args[1], true)
      .setThumbnail(i.displayAvatarURL({
        dyanmic: true
      }))
      .setTimestamp()
      .setFooter(message.guild.icon({
        dynamic: true
      }), message.guild.name)
    message.channel.send(embed);
   }
 } */
