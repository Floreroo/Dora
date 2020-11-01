const { MessageAttachment } = require("discord.js")

module.exports = {
    name: 'pornhub',
    description: 'Muestra una imagen de pornhub con el texto que escribiste',
    alias: [],
    async run (client, message, args) {
     
       //A

      //B
    
    
        const coño = args.join(" ")
        const algo = encodeURIComponent(coño)


 if(!coño) return message.channel.send("Debes poner el texto para que aparezca como pornhub!")
if(coño.length > 24) return message.channel.send("Tu texto no puede superar los 24 caracteres!")
 const pe = (`https://api.alexflipnote.dev/pornhub?text=${algo}&text2=Hub`)
 
 message.channel.send(pe)

    }
}