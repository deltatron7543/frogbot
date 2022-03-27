module.exports = {
    name: 'help_create_role',
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord) {

        let embed = new Discord.MessageEmbed()
            .setDescription('.create_role [role name] [role color] [permission]', '**')

        message.channel.send(embed)
    }
}