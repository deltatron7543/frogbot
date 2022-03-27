module.exports = {
    name: 'execute_order_66',
    description: "admin in breain killer!",
    async execute(message,args, cmd, client, Discord) {

        const channel = '776209446527303695';
        const BetaTeamRole = message.guild.roles.cache.find(role => role.name === "Admin")
        const GammaTeamRole = message.guild.roles.cache.find(role => role.name === "a")

        const BetaTeamEmoji = '🔪'
        const GammaTeamEmoji = '👀'

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('heh...')
            .setDescription('hmmmmm 🤔')

        let MessageEmbed = await message.channel.send(embed)
        MessageEmbed.react(GammaTeamEmoji)

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (user.bot) return
            if (!reaction.message.guild) return

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name == BetaTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(BetaTeamRole)
                }
                if (reaction.emoji.name == GammaTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(GammaTeamRole)
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (user.bot) return
            if (!reaction.message.guild) return

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name == BetaTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(BetaTeamRole)
                }
                if (reaction.emoji.name == GammaTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(GammaTeamRole)
                }
            } else {
                return;
            }
        });
    }
}