const { Client, Collection, version } = require("discord.js");
const { readdir } = require("fs")

const Captain = require('captainjs')
console = new Captain.Console()


/**
 @extends Discord.Client
*/
class DoraLaExploradora extends Client {
    /**
     * @param {Object} options 
     * @param {Object} options.clientOptions 
     * @param {Object} options.config 
     * @param {Object} options.perms 
     */
    constructor(options) {
        
        super(options.clientOptions || {});

        /**
         * @type {Discord.Collection}
         */
        this.commands = new Collection();
        /** 
         * @type {Discord.Collection}
         */
        this.alias = new Collection();


        /** 
         * @type {Object}
         */
        this.config = options.config ? require(`../${options.config}`) : {};
        /**
         * @type {Object}
         */
        this.perms = options.perms ? require(`../${options.perms}`) : {};


        console.log(`§2Node ${process.version}`)
        console.log(`§2Discord v${version}`)
    }

    /**
     * @param {String} token 
     */
    login(token) {
     
        super.login(token);

       
        return this;
    }

    /** 
     * @param {String} path
     */ 
    loadCommands(path) {
        readdir(path, (err, files) => {
            if (err) console.log(err);

            files.forEach(cmd => {
                const command = new (require(`../${path}/${cmd}`))(this);
 
                this.commands.set(command.help.name, command);

             command.conf.alias.forEach(a => this.alias.set(a, command.help.name));
            });
        });

        return this;
    }

    /**
     * @param {String} path
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