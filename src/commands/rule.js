const Discord = require('discord.js')

module.exports = {
    name: 'rule',

    execute(message, args) {

        function returnEmbedRule(text) {
            const embed = new Discord.MessageEmbed()
            .setTitle("Server Regulations")
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")   
            .setDescription(text)

            return embed
        }

        if(!args[0]) {
            const errorEbed = new Discord.MessageEmbed()
            .setDescription('__**Error**__\nArgument is missing!\nAvailable options:\n`1, 2, 3, 4, 5, 6, 7, 8, tos`')
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")   
            .setTitle(":name_badge: Command Error")
            return message.channel.send(errorEbed)
        } else if(args[0] == "1") {
            message.reply(returnEmbedRule("**SR:1** | Profanity is strictly prohibited within our server, any source of profanity will result in consequences depending on your action."))
        } else if(args[0] == "2") {
            message.reply(returnEmbedRule("**SR:2** | Any spamming within our server or to a member of our server via Direct Messages will result in consequences depending on your action."))
        } else if(args[0] == "3") {
            message.reply(returnEmbedRule("**SR:3** | Any sort of Cyberbullying or Harrasement noticed by a staff member will result in a server ban with a one chance appeal. Other consequences may apply."))
        } else if(args[0] == "4") {
            message.reply(returnEmbedRule("**SR:4** | Any kind of racism directed to any member of the community will result in a permanent ban with no appeal, racism is not tolerated here at Golosita."))
        } else if(args[0] == "5") {
            message.reply(returnEmbedRule("**SR:5** | Any kind of toxicity directed to any member of the community will result in a 24h mute, and if continued, a 3 day server ban."))
        } else if(args[0] == "6") {
            message.channel.send(returnEmbedRule("**SR:6** | Any sort of innapropriate content will result in a permanent ban, this could be pornographic/NSFW, gore, etc."))
        } else if(args[0] == "7") {
            message.reply(returnEmbedRule("**SR:7** | Any kind of mocking deaths within our community, especially a server members loss, will result in a permanent ban with no appeal."))
        } else if(args[0] == "8") {
            message.reply(returnEmbedRule("**SR:8** | Any sort of advertising in our server without permission from a Golosita administrator will result in a 48h mute."))
        } else if(args[0] == "tos") {
            message.reply(returnEmbedRule("__**DISCORD TOS**__\n:link: https://discord.com/guidelines \n:link: https://discord.com/terms"))
        }
    }
}
