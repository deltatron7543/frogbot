const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestions'],
    cooldown: 60000,
    description: 'creates a suggestion!',
    execute(message, args, cmd, client, Discord) {
        const channel = message.guild.channels.cache.find(c => c.id === '870143517228417106')
        if (!channel) return message.channel.send('This server does not have a channel named \`✨suggestions\`')

        let messageArgs = args.join(' ');
        message.delete()

        const embed = new MessageEmbed()

            .setColor('6bd16f')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(messageArgs)

        channel.send(embed).then((msg) => {
            msg.react('👍')
            msg.react('👎')

        }).catch((err) => {
            throw err
        })
    }
}