const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'question',
  aliases: ['ask', 'questions'],
  cooldown: 60000,
  description: 'creates a question!',
  execute(message, args, cmd, client, Discord) {
    const channel = message.guild.channels.cache.find(c => c.id === '870144000638734356')
    if (!channel) return message.channel.send('This server does not have a channel named \`❓-server-questions\`')

    let messageArgs = args.join(' ');
    message.delete()

    const embed = new MessageEmbed()

      .setColor('6bd16f')
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(messageArgs)

    channel.send(embed).then((msg) => {

    }).catch((err) => {
      throw err
    })
  }
}