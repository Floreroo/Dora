const { MessageAttachment } = require("discord.js")

module.exports = {
    name: 'supreme',
    description: 'Muestra una imagen de supreme con el texto que escribiste',
    alias: [],
    async run (client, message, args) {
     
        const coño = args.join(" ")
        const algo = encodeURIComponent(coño)

 if(!coño) return message.channel.send("Debes poner el texto para que aparezca como supreme!")
if(coño.length > 24) return message.channel.send("Tu texto no puede superar los 24 caracteres!")
 const pe = (`https://api.alexflipnote.dev/supreme?text=${algo}`)
 
 message.channel.send(pe)

    }
}