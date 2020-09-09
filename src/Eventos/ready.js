module.exports = async (client) => {
 
console.log('Stamo activo papi')

setInterval (() => {
   let puta = ["version "+ client.version, "como entras al serivdor de soporte!", "d!help", `d!invite`]
  client.user.setPresence({
  activity: { name: puta[Math.floor(Math.random()* puta.length)], type: "WATCHING", $browser: "DISCORD IOS", url: "https://twitch.tv/#/" },
  status: "online",
  

  })
  }, 6000)
}
