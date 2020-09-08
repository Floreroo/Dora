const { reverse } = require("dns")

module.exports = {
    name: "reverse",
    alias: [],
    async run (client, message, args) {

        if(!args[0]) return message.channel.send('Pon el texto!')
        message.channel.send(args.slice(0).join(' ').split('').reverse().join(''));
    }
}

