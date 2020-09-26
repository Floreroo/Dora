const { Model } = require('mongoose');

module.exports = {
    name: 'blacklist',
    description: "Pone a un usuario en la blacklist",
    alias: ["black"],
 async run (client, message, args) {

  
          const ModelBlack = require('../../database/models/blacklist')

        
          let permisos = client.devs.id.includes(message.author.id)
          if(!permisos) return;
        
          const u = message.mentions.users.first() || client.users.resolve(args[1]) || client.users.cache.find(c => c.tag === args[1])
   
          if(!u) return message.channel.send("Debes ingresar una mención/id de un usuario")

 
    
          if(args[0] === "add"){
    let NewBlack = await ModelBlack.findOne({blackID: u.id}).exec()
    if(NewBlack){
    
    await NewBlack.updateOne({blackID: u.id})
    
    
    message.channel.send(`Nuevo miembro en la blacklist ${u.toString()}`)


} else {
          
    let NewBlack2 = new ModelBlack({blackID: u.id})
    await NewBlack2.save()
    
    message.channel.send(`${u.toString({ disableMentions: "all" })} ha sido agregado a la blacklist`)
}
    }

    


 if(args[0] === "remove"){   // if(window.location.href.split(':')[0] == "http") window.location.replace("https://serenachan.glitch.me/");
      
 
await ModelBlack.findOne({blackID: u.id}).deleteOne()

message.channel.send(`${u.toString({ disableMentions: "all" })} ha sido removido de la blacklist`)

 }

 }
}