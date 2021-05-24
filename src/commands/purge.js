const Discord = require('discord.js')

module.exports = {
    name: 'purge',
    execute(message, args, client) {
        if (!args[0]) {
            const reply = new Discord.MessageEmbed()
            .setDescription('__**Error**__\nFirst argument is missing!')
            .setTitle(":name_badge: Command Error")
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")
            return message.channel.send(reply)
        } else if (args[0]) {
            if (isNaN(args[0])) {
                const reply = new Discord.MessageEmbed()
                .setDescription('__**Error**__\nFirst argument is not a number')
                .setTitle(":name_badge: Command Error")
                .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
                .setColor("#ffbf00")
                return message.channel.send(reply)    
            } else if (!isNaN(args[0])) {
                if (args[0] < 2 || args[0] > 99) {
                    const reply = new Discord.MessageEmbed()
                    .setDescription('__**Error**__\nFirst argument must be a number between 2 and 99')
                    .setTitle(":name_badge: Command Error")
                    .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
                    .setColor("#ffbf00")
                    return message.channel.send(reply)
                } else if (args[0] > 2 || args[0] < 99) {
                    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                        const reply = new Discord.MessageEmbed()
                        .setDescription('__**Error**__\nYou are missing the manage messages permission')
                        .setTitle(":name_badge: Command Error")
                        .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
                        .setColor("#ffbf00")
                        return message.channel.send(reply)    
                    } else if (message.member.hasPermission("MANAGE_MESSAGES") or message.author.id == "727887715869261864") {
                        message.channel.bulkDelete(args[0])
                    }
                }
            }
        }
    }
}
