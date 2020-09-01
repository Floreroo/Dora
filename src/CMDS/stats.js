const Discord = require("discord.js")
const os = require('os')
const cpuStat = require("cpu-stat");
const moment = require("moment")
require("moment-duration-format");
const { promisify } = require("util");
const p = promisify(cpuStat.usagePercent);

  module.exports = {
      nombre: "stats",
      alias: ["botstats"],
      cooldown: 2,
      run: async (client, message, args) => {

        let percent = await p();
        const embed = new Discord.MessageEmbed()
        .addField("RAM", `${memory(os.totalmem() - os.freemem(), false)} / ${memory(os.totalmem())}`, true)
        .addField("UPTIME", `${moment.duration(Date.now() - client.readyTimestamp, "ms").format("d [days], h [hours], m [minutes]")}`, true)
        .addField("NODE.JS", `${process.version}`, true)
        .addField("DISCORD.JS", `${Discord.version}`, true)
        .addField("CPU", )
        .setColor('RANDOM')
        message.channel.send(embed)

      }
  }

  
function memory(bytes = 0, r = true){
  const gigaBytes = bytes / 1024**3;
  if(gigaBytes > 1){
      return `${gigaBytes.toFixed(1)} ${r ? "GB" : ""}`;
  }
  
  const megaBytes = bytes / 1024**2;
  if(megaBytes > 1){
      return `${megaBytes.toFixed(2)} ${r ? "MB" : ""}`;
  }

  const kiloBytes = bytes / 1024;
  if(kiloBytes > 1){
      return `${kiloBytes.toFixed(2)} ${r ? "KB" : ""}`;
  }
  
  return `${bytes.toFixed(2)} ${r ? "B" : ""}`;
}