const Discord = require('discord.js')

module.exports = {
    name: "disconnect",

    execute(message, args, client) {
        if (!message.member.voice.channel) {
            const noaccess = new Discord.MessageEmbed()
            .setDescription('__**Error**__\nYou are not in a **voice channel**.')
            .setTitle(":name_badge: Command Error")
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")
            return message.reply(noaccess)
        } else if (message.member.voice.channel && message.guild.me.voice.channel) {
            message.guild.me.voice.channel.leave()
            message.react("👋")
        }
    }
}