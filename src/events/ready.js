module.exports = async (client) => {
 
  console.log('Stamo activo papi')

  setInterval (() => {
  let puta = [`${client.ws.ping}ms`]
  client.user.setPresence({
  activity: { name: puta[Math.floor(Math.random()* puta.length)], type: "WATCHING", $browser: "DISCORD IOS", url: "https://twitch.tv/#/" },
  status: "online",

  })
 }, 2000)
}
