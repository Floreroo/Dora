module.exports = class {
    constructor(client) {
        this.client = client
    
console.log('Stamo activo papi')

    setInterval (() => {
        let puta = ["OLA", "PENE"]
  this.client.user.setPresence({
    activity: { name: puta[Math.floor(Math.random()* puta.length)], type: "WATCHING"  },
    status: "idle",
  
})
    }, 6000)
 }
}
