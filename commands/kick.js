module.exports = {
    name: 'kick',
    description: "this is a kick command!",
    execute(message) {

        if (message.member.permissions.has("KICK_MEMBERS")) {
            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member
                        .kick('Optional reason that will display in the audit logs')
                        .then(() => {
                            message.reply(`Successfully kicked ${user.tag}`)
                        })

                        .catch(err => {
                            message.reply('There was an error while trying to kick this member')
                            console.error(err)
                        })

                } else {
                    message.reply('The user is not in this server')
                }

            } else {
                message.reply("There was an error please check your command")
            }

        } else {

            message.channel.send('You do not have the perms to kick this user. Try again when you do!')
        }
    }
}
