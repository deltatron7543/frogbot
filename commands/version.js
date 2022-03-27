module.exports = {
    name: 'version',
    description: "this is a command that sends the version of the bot!",
    execute(message) {

        message.channel.send(`version: 1.3.0`)

    }
}