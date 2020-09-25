
module.exports = {
    name: 'blacklist',
    description: "Pone a un usuario en la blacklist",
    alias: ["black"],
 async run (client, message, args) {

          const ModelBlack = require('../../database/models/blacklist')

          let permisos = client.devs.id.includes(message.author.id)
          if(!permisos) return message.channel.send("A")
        
          const u = message.mentions.users.first() || client.users.resolve(args[0]) || message.author;
   
    let NewBlack = await ModelBlack.findOne({blackID: u.id}).exec()
    if(NewBlack){
    
    await NewBlack.updateOne({blackID: u.id})
    
    
    message.channel.send(`Nuevo miembro en la blacklist ${u.toString()}`)


} else {
          
    let NewBlack2 = new ModelBlack({blackID: u.id})
    await NewBlack2.save()
    
    message.channel.send(`Nuevo miembro en la blacklist ${u.toString()}`)
}
    }
}