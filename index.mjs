import dotenv from 'dotenv';
dotenv.config();
import commons from './util/commons.mjs';
const { require } = commons(import.meta.url);

const { Collection, Client } = require('discord.js')
const { readdirSync, statSync } = require("fs")
export const client = new Client({ config: "./config.json", disableMentions: 'everyone', partials: ["MESSAGE", "CHANNEL", "REACTION"],  ws: { properties: { $browser: "Discord Android" }}})
export const database = require('./src/database/index')

client.commands = new Collection()
client.version = "0.6.4", 
client.devs = require('./util/devs')

function getDirectories() {
  return readdirSync('./src/Comandos').filter(function subFolder(file) {
    return statSync('./src/Comandos/'+file).isDirectory()
  })
}

let commandFiles = readdirSync('./src/Comandos').filter(f => f.endsWith(".js"))

for(const folder of getDirectories()) {
  const folderFiles = readdirSync('./src/Comandos/'+folder).filter(f => f.endsWith(".js"))
  for(const file of folderFiles) {
    commandFiles.push([folder, file])
  }
}
for(const file of commandFiles) {
  let command;
  if(Array.isArray(file)) {
    command = require(`./src/Comandos/${file[0]}/${file[1]}`)
  } else {
    command = require(`./src/Comandos/${file}`)
  }
  client.commands.set(command.name, command)
} 

for(const file of readdirSync('./src/Eventos/')) {
  if(file.endsWith('.js')) {
    let fileName = file.substring(0, file.length - 3)
    let fileContents = require(`./src/Eventos/${file}`)
    client.on(fileName, fileContents.bind(null, client))
    
  }
}

client.login(process.env.DISCORD_TOKEN)

 
