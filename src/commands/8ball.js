const answers = [
    "No.",
    "Yes.",
    "Doubt that.",
    "Probably.",
    "Probably not.",
    "I highly doubt.",
    "As I see it, yes.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don’t count on it.",
    "It is certain.",
    "It is decidedly so.",
    "Most likely.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Outlook good.",
    "Reply hazy, try again.",
    "Signs point to yes.",
    "Very doubtful.",
    "Without a doubt.",
    "Yes.",
    "Yes – definitely.",
    "You may rely on it."
];

const Discord = require('discord.js')

module.exports = {
    name: '8ball',
    description: 'Try your luck',
    guildOnly: true,
    cooldown: 5,

    execute(message, args) {
        if (!args[0]) {
            const errEmbed = new Discord.MessageEmbed()
            .setDescription('__**Error**__\n Arguments are missing!')
            .setTitle(":name_badge: Command Error")
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")
            return message.channel.send(errEmbed)
        } else if (args[0]) {
            const i = Math.floor(Math.random() * (answers.length -1) + 1)
            const answerembed = new Discord.MessageEmbed()
            .setDescription(answers[i])
            .setTitle(":8ball: 8Ball's Answer")
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")

            return message.channel.send(answerembed)
        }
    } 
}

