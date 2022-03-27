module.exports = {
    name: 'join',
    aliases: ['connect'],
    description: "this is a command that joins voice channels!",
    execute(message, args, cmd, client, Discord) {

        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('You need to be in a channel to execute this command!');
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins');

        if (cmd === 'join', 'connect') {
            voice_channel.join()
                .then(connection => {
                    message.channel.send("Connected!")
                });

        }

    }
}