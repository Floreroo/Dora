module.exports = {
 name: "join",
 alias: ["j", "entrar"],
 async run (client, message, args){
 
 if(!message.member.voice.channel) return message.channel.send("¡Debes estar en un canal para que pueda entrar!")
 if (!message.member.voice.channel.joinable) return message.channel.send(`¡No tengo permisos para meterme en \`\`${message.member.voice.channel.name}\`\`!`)
 message.member.voice.channel.join().then(() => message.channel.send("¡Me he metido satisfactoriamente a " + "``" + message.member.voice.channel.name + "``!")).catch(err => message.channel.send(`¡Ha habido un error! \`\`${err}\`\``));
 }
}