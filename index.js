const Discord = require('discord.js')
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] })
const mongoose = require("mongoose")

const keepAlive = require("./server")


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

const loop = ['events', 'commands']

loop.forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
})

mongoose.connect(process.env.MONGO_DB_SRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log('[DATABASE] connected to database!')
}).catch((err) => {
  console.log(err)
})


keepAlive()

client.login(process.env.BOT_TOKEN);