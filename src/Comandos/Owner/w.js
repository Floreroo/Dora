module.exports = {
name: "w",
alias: ["Welcome"],
async run(client, message) {
client.emit('guildMemberAdd', message.member)
}
}