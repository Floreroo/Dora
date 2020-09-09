module.exports = async (client, message) => {

client.snipes.set(message.channel.id, {
message: message.content,
member: message.author,
avatar: message.author.displayAvatarURL,
channel: message.channel.toString()
 });
}