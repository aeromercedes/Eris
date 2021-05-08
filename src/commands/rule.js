const Discord = require('discord.js')

module.exports = {
    name: 'rule',

    execute(message, args) {
        const rule1 = ":one: **Innapropriate topics/phrases are not permitted to be used in the server, unless you have been given consent by Golosita Administration, we do not recommend using any as it will result in a punishment.** "
        const rule2 = ":two: **Profanity is allowed, but do not use it excessively and do not use heavy swearing phrases. This will result in a punishment.**"
        const rule3 = ":three: **Spamming is not allowed, any sort of excessive spam will result in a punishment.**"
        const rule4 = ":four: **Any form of harassment or cyberbullying is strictly prohibited in our text channels and voice channels. The Golosita Administration will strictly enforce this rule and shall take any necessary actions of both parties involved in harassment/cyber-bullying cases. This does include any conflict between both parties.**"
        const rule5 = ":five: **Advertising any content, without the consent of Golosita’s Administration is highly forbidden, and consequences will apply.**"
        const rule6 = ":six: **NSFW content, such as flashing/pornographic content will not be tolerated. This will result in a punishment.**"

        if(!args[0]) {
            const errorEbed = new Discord.MessageEmbed()
            .setDescription('__**Error**__\nArgument is missing!\nAvailable options: 1, 2, 3, 4, 5 6')
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")   
            .setTitle(":name_badge: Command Error")
            return message.channel.send(errorEbed)
        } else if(args[0] == "1") {
            return message.reply(rule1)
        } else if(args[0] == "2") {
            return message.reply(rule2)
        } else if(args[0] == "3") {
            return message.reply(rule3)
        } else if(args[0] == "4") {
            return message.reply(rule4)
        } else if(args[0] == "5") {
            return message.reply(rule5)
        } else if(args[0] == "6") {
            return message.reply(rule6)
        }
    }
}
