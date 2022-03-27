module.exports = {
    name: 'create_role',
    description: "this is a testing command!",
    execute(message, args, client, Discord) {

        let args_1 = args[0]
        let args_2 = args[1]
        let args_3 = args[2]

        console.log(`args_1 ${args_1}`)
        console.log(`args_2 ${args_2}`)
        console.log(`args_3 ${args_3}`)

        message.guild.roles.create({
            data: {
                name: args_1,
                color: args_2,
                permissions: args_3,
            },
            reason: 'we needed a role for Super Cool People',
        })
            .then(console.log)
            .then(
                message.channel.send('Done!')
            )
            .catch(console.error);

    }
}