const { Kasak } = require("../../../util/devs");

   
   module.exports = {
    name: "verificar",
    async run (client, message, args) {

        if(message.channel.id === "752227275986173972"){

    message.member.roles.add("752166382040383610")
    message.delete()
    }
  }
}