const Discord = require('discord.js')

module.exports = {
    name: 'prefix',
    description: 'Try your luck',
    guildOnly: true,
    cooldown: 5,

    execute(message, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle("🧱 Prefix")
        .setDescription("Eris prefix is *\nRun *help to see all available commands")
        .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
        .setColor("#ffbf00")
        message.reply(embed)
    } 
}

