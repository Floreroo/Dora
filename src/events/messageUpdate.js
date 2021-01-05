module.exports = async (client, oldMessage, newMessage) => {
  client.emit('message', newMessage);
}
