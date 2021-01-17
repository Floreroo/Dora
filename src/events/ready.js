module.exports = async (client) => {

  console.log('Stamo activo papi')

  setInterval(() => {
    client.user.setPresence({
      activity: {
        name: Fecha(),
        type: "LISTENING",
        $browser: "DISCORD IOS",
        url: "https://twitch.tv/#/"
      },
      status: "online",

    })
  }, 60000)
}
function Fecha() {
 var now = new Date();
 var d = now.setDate(now.getUTCDay());
 var mon = now.setMonth(new Date().getMonth());
 var y = now.getFullYear();
 var h = now.getHours();
 var m = now.getMinutes();
 var s = now.getSeconds();

 return `${d.toString().substr(0,2)}/${mon.toString().substr(0,1)}/${y} ${h}:${m}`
}

Fecha()
