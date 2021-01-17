module.exports = async (client) => {

  console.log('Stamo activo papi')

  setInterval(() => {
    client.user.setPresence({
      activity: {
        name: client.ws.ping + "ms",
        type: "WATCHING",
        $browser: "DISCORD IOS",
        url: "https://twitch.tv/#/"
      },
      status: "online",

    })
  }, 5000)
}
