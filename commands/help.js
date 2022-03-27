const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: "this is a testing command!",
    execute(message, args, client, Discord) {


        let embed = new MessageEmbed()

            .setColor('#00FF00')
            .setTitle('Frog Bot Commands')
            .setDescription('Please note that these commands may be out dates at the moment and the bot is still a Work in progress')
            .addField('Moderation:', 'Purge, Mute/Unmute, Kick, Ban')
            .addField('Music:', 'Join, Play, Skip, Stop')
            .addField('Others:', 'Ping')
            .addField('For Frog Clan', 'Ask, Suggest')

        message.channel.send(embed)

    }
}