module.exports = {
    name: 'ban',
    description: "this is a ban command!",
    execute(message){
        if(message.member.permissions.has("BAN_MEMBERS")) {

            const user = message.mentions.users.first();
 
            if (user) {
                 const member = message.guild.members.resolve(user);
 
                if (member) {
                    member
                    .ban({
                        Reason: 'They were bad, probably.',
                    })
                    .then(() => {
                        message.reply(`Successfully banned ${user.tag}`)
                    })
 
                    .catch(err => {
                        message.reply('There was an error while trying to ban this member')
                        console.error(err)
                    })
 
                } else {
                    message.reply('The user is not in this server')
                }
 
            } else {
                message.reply("There was an error please check your command")
            }

        } else {

            message.channel.send('You do not have the perms to ban this user. Try again when you do!')
        }
    }
}
