const Discord = require('discord.js');

  module.exports = {
      nombre: "stats",
      alias: ["botstats"],
      cooldown: 2,
      run: async (client, message, args) => {

        const embed = new Discord.MessageEmbed()
        message.channel.send(embed)

      }
  }