const { MessageEmbed } = require("discord.js")

module.exports = {
 name: "noticias",
 alias: ["kasake el reportero"],
 run (client, message, args) {

      let kasake = client.users.cache.get(client.devs.id[0])

          let embed = new MessageEmbed()
          .setAuthor(kasake.tag, kasake.displayAvatarURL({ dynamic: true }))
          .addField("¿Quieres ver estos mensajes?", "[Entra aqui!](https://discord.gg/EXyn6yU)", true)
          .setDescription("Nuevos comandos: **remprefix** **remwelcome** \n Nuevo sistema: Al momento de sacar a Dora de un server, su prefix se establecerá a ``dora`` osea el principal", true)
          .setImage("https://media.discordapp.net/attachments/752344409915392104/754844402853216338/Captura_de_pantalla_464.png")
          .setColor("RANDOM")
          .setFooter("INFORMACION", message.guild.iconURL({ dynamic: true }))
          message.channel.send(embed)
 }
}