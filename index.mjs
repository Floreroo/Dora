import dotenv from 'dotenv';
dotenv.config();
import commons from './src/util/JS/pene.mjs';
const { require } = commons(import.meta.url);

const { Collection, Client} = require('discord.js')
const { readdirSync, statSync } = require("fs")
export const client = new Client({ config: "./config.json", disableMentions: 'everyone', partials: ["MESSAGE", "CHANNEL", "REACTION"],  ws: { properties: { $browser: "Discord Android" }}})
export const database = require('./src/database/index')

const ascii = require('ascii-table')
const table = new ascii().setHeading('Comando', 'Carpeta')
const fs = require('fs')

client.commands = new Collection()
client.version = "0.7.2", 
client.devs = require('./src/util/JSON/devs.json').devs
client.snipes = new Map
client.mongoose = require("./src/database/index")
client.radio = "https://infamesrpradio.com/player/"
function getDirectorios() {
  return fs.readdirSync('./src/Comandos/').filter(function subFolder(file) {
    return fs.statSync(`./src/Comandos/${file}`).isDirectory()
  })
}

const cmdFiles = fs.readdirSync('./src/Comandos/').filter(file => file.endsWith('.js'))
for (const Folder of getDirectorios()) {
  const FolderFile = fs.readdirSync(`./src/Comandos/${Folder}`).filter(end => end.endsWith('.js'))
  for (const File of FolderFile) {
    cmdFiles.push([Folder, File])
  }
}

for (const file of cmdFiles) {
  let cmd;
  if(Array.isArray(file)) {
    cmd = require(`./src/Comandos/${file[0]}/${file[1]}`)
  } else {
    cmd = require(`./src/Comandos/${file}`)
  }
  client.commands.set(cmd.name, cmd)
  table.addRow(cmd.name, file[0])
} 

for(const file of readdirSync('./src/Eventos/')) {
  if(file.endsWith('.js')) {
    let fileName = file.substring(0, file.length - 3)
    let fileContents = require(`./src/Eventos/${file}`)
    client.on(fileName, fileContents.bind(null, client))
    
  }
}


client.login(process.env.DISCORD_TOKEN)

 
