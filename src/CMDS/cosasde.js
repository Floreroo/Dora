const Discord = require('discord.js')

module.exports = {
    nombre: "pene",
    alias: [],
    run: (client, message, args) => {
        function Clave() {
            let clave = Math.random().toString(36).slice(6).split('').map((x, i) => x[(i % 2) ? 'toLowerCase' : 'toUpperCase']()).join('')
            return clave
            }
            
            let clave = Clave()
            
            const filter = m => m.content.includes(clave)
            const collector = message.channel.createMessageCollector(filter, { time: 15000 })
            
            message.channel.send(Clave)
            
            collector.on('collect', m => {
            message.channel.send('Correcto')
            })
            
            collector.on('end', collected => {
            message.channel.send('La Contraseña era '+clave)
            })
             
        }
    }