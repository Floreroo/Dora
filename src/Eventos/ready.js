module.exports = async (client) => {
 
console.log('Stamo activo papi')
setInterval (() => {
    let puta = ["?", "??", "???", "????"]
  client.user.setPresence({
  activity: { name: puta[Math.floor(Math.random()* puta.length)], type: "STREAMING", url: "https://twitch.tv/#/" },
  status: "idle",
  
  })
  }, 6000)
}
