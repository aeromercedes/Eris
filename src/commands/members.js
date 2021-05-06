module.exports = {
    name: 'members',
    description: 'Shows the member amount in this server.',
    guildOnly: true,
    cooldown: 5,

    execute(message) {
        const Discord = require('discord.js')
        const guild = message.guild.members
        const thing = new Discord.MessageEmbed()
        .setTitle("Member Count")
        .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
        .setColor("#ffbf00")
        .setDescription(`Total member count: **${message.guild.memberCount}**\nBot Count: **${guild.cache.filter(m => m.user.bot).size}**\nUser Count: **${guild.cache.filter(m => !m.user.bot).size}**`)
        message.channel.send(thing)
    }
}