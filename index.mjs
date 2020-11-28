import dotenv from 'dotenv';
dotenv.config();
import commons from './src/util/commons.mjs';
const { require } = commons(import.meta.url);

const { Collection, Client} = require('discord.js')
const { readdirSync, statSync } = require("fs")
export const client = new Client({ config: "./config.json", disableMentions: 'everyone', partials: ["MESSAGE", "CHANNEL", "REACTION"],  ws: { properties: { $browser: "Discord Android" }}})
export const database = require('./src/database/index')

client.commands = new Collection();
client.snipes = new Map()
client.db = require("./src/database/index")
client.version = "0.8.0", 
client.devs = require('./src/util/JSON/devs.json').devs
client.melphi ="https://discord.com/users/534951970310586378",

function getDirectorios() {
	return require('fs')
		.readdirSync('./src/commands')
		.filter(function subFolder(file) {
			return require('fs')
				.statSync(`./src/commands/${file}`)
				.isDirectory();
		});
}

const cmdFiles = require('fs')
	.readdirSync('./src/commands')
	.filter(file => file.endsWith('.js'));

for (const Folder of getDirectorios()) {
	const FolderFile = require('fs')
		.readdirSync(`./src/commands/${Folder}`)
		.filter(end => end.endsWith('.js'));
	for (const File of FolderFile) {
		cmdFiles.push([Folder, File]);
	}
}

for (const file of cmdFiles) {
	let cmd;
	if (Array.isArray(file)) {
		cmd = require(`./src/commands/${file[0]}/${file[1]}`);
	} else {
		cmd = require(`./src/commands/${file}`);
	}
	client.commands.set(cmd.name, cmd);
}

for(const file of readdirSync('./src/events/')) {
  if(file.endsWith('.js')) {
    let fileName = file.substring(0, file.length - 3)
    let fileContents = require(`./src/events/${file}`)
    client.on(fileName, fileContents.bind(null, client))
    
  }
}



client.login(process.env.TOKEN)
