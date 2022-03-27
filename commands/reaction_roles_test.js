module.exports = {
    name: 'reaction_roles_test',
    description: "Sets up a reaction role message!",
    async execute(message, args, cmd, client, Discord) {


        const channel = '861756647889960973';
        const test1role = message.guild.roles.cache.find(role => role.name === "Admin");
        const test2role = message.guild.roles.cache.find(role => role.name === "test2");

        const test1emoji = '🔨';
        const test2emoji = '⚒️';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a role!')
            .setDescription('random test roles\n\n'
                + `${test1emoji} for ${test1role}\n`
                + `${test2emoji} for ${test2role}`);

        let messageEmbed = await message.channel.send(embed);

        messageEmbed.react(test1emoji);
        messageEmbed.react(test2emoji);

        //adding role 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            //role1
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === test1emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(test1role);
                }

                //role2
                if (reaction.emoji.name === test2emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(test2role);
                }
            } else {
                return;
            }

        });

        //removing role
        client.on('messageReactionRemove', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            //role1
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === test1emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(test1role);
                }

                //roles2
                if (reaction.emoji.name === test2emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(test2role);
                }
            } else {
                return;
            }
        });
    }

}
