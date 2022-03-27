const fs = require('fs')

module.exports = (client, Discord) => {
    const currency_files = fs.readdirSync(`./currency`).filter(files => files.endsWith('.js'))

    for (const file of currency_files) {
        const command = require(`../currency/${file}`)

        if (command.name) {
            client.commands.set(command.name, command)
        } else {
            continue;
        }
    }
}