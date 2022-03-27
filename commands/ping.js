module.exports = {
    name: 'ping',
    cooldown: 10,
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord){

        message.channel.send('pong!');
    }
}