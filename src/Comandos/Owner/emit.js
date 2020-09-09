module.exports = {
    name: "w",
  run (client, message) {

    if(!["598550433421590544"].includes(message.author.id)) return

client.emit('guildMemberAdd', message.member)

  }
}