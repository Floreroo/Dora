module.exports = async (client, message) => {

  client.snipes.set(message.channel.id, {
    message: message.content,
    member: message.author,
    channel: message.channel.toString()
  });
}
