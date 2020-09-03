const { Client, Collection, version } = require("discord.js");
const { readdir } = require("fs")

const Captain = require('captainjs')
console = new Captain.Console()

/**
 @extends Discord.Client
*/
class DoraLaExploradora extends Client {
    /**
     * @param {Object} options Las opciones pasadas a la cliente.
     * @param {Object} options.clientOptions Las opciones de cliente utilizadas por el cliente discord.js original
     * @param {Object} options.config La ruta del archivo al archivo de configuración
     * @param {Object} options.perms El archivo de niveles de permiso
     */
    constructor(options) {
        // Inicializar el cliente discord.js con las opciones de cliente suministradas
        super(options.clientOptions || {});

        /**
         * Una colección de todos los comandos del bot
         * @type {Discord.Collection}
         */
        this.commands = new Collection();
        /**
         * Una colección de todos los alias de comando del bot
         * @type {Discord.Collection}
         */
        this.alias = new Collection();

        // Variables de cliente
        /**
         * La configuración del bot: vacía si no se especificó ningún archivo
         * @type {Object}
         */
        this.config = options.config ? require(`../${options.config}`) : {};
        /**
         * Niveles de permiso del bot
         * @type {Object}
         */
        this.perms = options.perms ? require(`../${options.perms}`) : {};

        // Informar al usuario que el cliente se ha inicializado
        console.log(`§2Node ${process.version}`)
        console.log(`§2Discord v${version}`)
    }

    /**
     * Inicia sesión en la cliente
     * @param {String} token El token utilizado para iniciar sesión en la cliente
     */
    login(token) {
        // Inicie sesión super con el token especificado
        super.login(token);

        // Devuelve este cliente para permitir el encadenamiento de llamadas a funciones
        return this;
    }

    /**
     * Carga todos los comandos en el directorio
     * @param {String} path La ruta donde se encuentran los comandos
     */ 
    loadCommands(path) {
        readdir(path, (err, files) => {
            if (err) console.log(err);

            files.forEach(cmd => {
                const command = new (require(`../${path}/${cmd}`))(this);
 
                this.commands.set(command.help.name, command);

                command.conf.aliases.forEach(a => this.alias.set(a, command.help.name));
            });
        });

        return this;
    }

    /**
     * Carga todos los eventos en la directora.
     * @param {String} path El camino donde se ubican los eventos
     */
    loadEvents(path) {
        readdir(path, (err, files) => {
            if (err) console.log(err);

            files.forEach(evt => {
                const event = new (require(`../${path}/${evt}`))(this);

                super.on(evt.split(".")[0], (...args) => event.run(...args));
            });
        });

        return this;
    }
}

module.exports = DoraLaExploradora;