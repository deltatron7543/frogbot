const ms = require('ms')

module.exports = {
    name: 'mute',
    description: "this is a mute command!",
    execute(message, args) {


        const target = message.mentions.users.first();

        if (target) {

            if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You do not have the permission required to mute users")

            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')

            let memberTarget = message.guild.members.cache.get(target.id)

            if (!args[1]) {
                memberTarget.roles.add(muteRole)
                message.channel.send(`<@${memberTarget.user.id}> has been muted!`)
                return
            }

            memberTarget.roles.add(muteRole)
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`)

            setTimeout(function () {

                memberTarget.roles.remove(muteRole)

            }, ms(args[1]))

        } else {
            message.reply("I can not find that member!")
        }
    }
}
