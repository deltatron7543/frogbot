module.exports = {
    name: 'rules',
    description: "this is a comand for rules!",
    execute(message, args, cmd, client, Discord, isDelta) {

        if (message.author.id == isDelta) {

            let embed = new Discord.MessageEmbed()

                .setTitle("Follow The Rules To Prevent Yourself From Moderation Actions:")
                .addField("1. Avoid NSFW at all cost.", "Don't post NSFW/18+ stuff in the server. This includes excessive lewd talk and verbal NSFW. There is a time and place for everything and this is not the place for NSFW content")
                .addField("2. Be Family Friendly", "We are trying to make this server as family-friendly as possible, so please try to keep things like language and adult/harsh topics to an absolute minimum.")
                .addField("3. Swearing", "You may occasionally swear on the condition that it is not directed to a person/group.")
                .addField("4. No Spamming outside of #⛔-spam", "Spamming is not allowed and will result with moderation actions if it is outside of #⛔-spam. Do not send messages in full capital letters, send repeated text, excessively ping or send too many messages in a row.")
                .addField("5. Be Respectful", "Treat everybody the way you would like to be treated, we are all friends here! That basically means no conflicts, anger at each other or anything like that.")
                .addField("6. Use Common Sense", "Do not do things that are plain stupid, we all have common sense and we must use it!")
                .addField("7. Appropriate Username/Nicknames/Profile pictures", "You must use appropriate usernames and nicknames and profile pictures on this server. If needed we will change it.")
                .addField("8. Do not Advertise", "You can't advertise other Discord servers or YouTube videos, unless if allowed by a Staff.")
                .addField("9. Don't beg for roles", "Roles are not given out in this server, you should earn it by being a responsible and active member..")
                .addField("10.  Don't go off topic in any of the channels.", "Please keep within the designated topic of the channel.")
                .addField("11.Don't make annoyance in voice channels.", "This includes putting inappropriate songs, ear-rape and shouting")
                .addField("12. Do not Abuse", "Do not Abuse your power, weather it's admin power or senior role.")
                .addField("13. Follow Discord Terms", "You must read the Discord terms in full (https://discord.com/terms) and uphold them at all times")

            message.channel.send(embed)

        }
    }
}