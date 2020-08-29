const { readdirSync } = require('fs');
const ascii = require('ascii-table');
let table = new ascii('Commands');
table.setHeading('Command', 'Load status');
 
module.exports = client => {
	const load = dirs => {
		const commands = readdirSync(`./CMDS/${dirs}/`).filter(d => d.endsWith('.js')
		);
		

		for (let file of commands) {
			let carpeta = require(`../CMDS/${dirs}/${file}`); 

			client.commands.set(carpeta.config.nombre, carpeta); //Acá iniciamos un nuevo establecimiento
			if (carpeta.config.nombre) {
				// NO TOCAR
				table.addRow(file, '✅');
			} else {
				table.addRow(
					file,
					`❌  -> falta un help.name, o help.name no es un string.`
				);
				continue;
			} //NO TOCAR
			if (carpeta.config.alias)
				carpeta.config.alias.forEach(a =>
					client.alias.set(a, carpeta.config.nombre)
				); 
				
		} 
	};
    ['util', 'config', 'dev', 'economia', 'administración', 'interaccion',"img"].forEach(x => load(x));
}