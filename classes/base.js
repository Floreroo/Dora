const { Client, Discord } = require('discord.js');
const captain = require('captainjs');
  
    class KasakeClient extends Client {
        /**
         * @param {Object} options
         */
        constructor(options) {

            console.log(`${process.version}`)
            console.log(`${Discord.version}`)
        }
              /**
     * 
     * @param {String} token 
     */
    login(token) {
        super.login(token);

        return this;
    }
}


 module.exports = KasakeClient