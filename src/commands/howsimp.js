const Discord = require('discord.js')

module.exports = {
    name: 'howsimp',
    description: 'simp meter.',
    guildOnly: true,
    cooldown: 5,

    execute(message) {
        let mentioned = message.mentions.users.first() || message.author

        const simpEmbed = new Discord.MessageEmbed()
        .setTitle(`${mentioned.username} Simpmeter`)
        .setDescription(`${mentioned} is ${Math.floor(Math.random() * (100 - 0) + 0)}% simp! :eyes:`)
        .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
        .setColor("#ffbf00")

        message.channel.send(simpEmbed)
    }
}