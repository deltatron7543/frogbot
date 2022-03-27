module.exports = {
    name: 'unmute',
    description: "this is a unmute command!",
    execute(message,args, cmd, client, Discord){
        const target = message.mentions.users.first();

        if(target) {

            if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You do not have the permission required to unmute someone")

            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')

            let memberTarget = message.guild.members.cache.get(target.id)

            memberTarget.roles.remove(muteRole)
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted!`);

        } else {
            message.channel.reply("I can not find that member!")
        }
    }
}