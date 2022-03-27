const cooldowns = new Map();

module.exports = (Discord, client, message) => {
  const prefix = process.env.PREFIX;

  //console.logs message/guildand shit-
  console.log(`[USERTAG]  ${message.author.tag} => [MESSAGE]  ${message.content} \n[CHANNEL] ${message.channel.name} [GUILD] ${message.guild.name}`)

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  //my UID
  const isDelta = '550105480618573833'

  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd))

  if (command) {
    command.execute(message, args, cmd, client, Discord, isDelta)
  }
}