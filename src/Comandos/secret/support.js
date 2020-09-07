   
   module.exports = {
    name: "a",
    async run (client, message, args) {

        if(message.channel.id === "752227275986173972"){
      message.channel.send("Hola! Bienvenid@ al servidor de soporte Dora La Exploradora, reacciona con 🔓 para que se te abra el servidor. \nNota: `Si no se te abre el servidor contacta con uno de los staff`").then(m => {
     
        if(!["598550433421590544"].includes(message.author.id)) return

      m.react('🔓')

      m.awaitReactions(
        async (reaction, user) => {

          if(user.bot) return;
          if(!reaction.message.guild) return

          if (reaction.emoji.name === '🔓') { 
            await reaction.message.guild.members.cache.get(user.id).roles.add("752166382040383610")
          }

          console.log(user.tag + " ha reaccionado con " + reaction)

        });
      });
    }
  }
}