module.exports = {
  name: 'purge',
  aliases: ['clear'],
  description: 'this is the purge cmd',
  async execute(message, args) {

    
    if (!args[0]) return message.reply('please send the amount of messages to delete')
    if (isNaN(args[0])) return message.reply(`please enter a real number`)

    if (args[0] > 100) return message.reply('you cannot delete more than 100 messages!')
    if (args[0] < 1) return message.reply(`you cannot delete less than 1 message!`)

    await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
      message.channel.bulkDelete(messages)

        .then(messages => {
          message.channel.send(`Deleted ${args[0]} messages`)
            .then(msg => {
              msg.delete({ timeout: 3000 })
            })
        }
        )
    })
  }
}