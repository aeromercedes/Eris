const Discord = require('discord.js')

module.exports = {
    name: 'userinfo',
    description: '',
    guildOnly: true,
    cooldown: 5,

    execute(message) {
        let user = message.mentions.users.first() || message.author
        let member = message.mentions.members.first() || message.member
        let isAuthorized = "False"

        if (user.id == "727887715869261864") {
            isAuthorized = "True"
        }

        const embed = new Discord.MessageEmbed()
        .setTitle("User Information")
        .setColor("#ffbf00")
        .setThumbnail(user.avatarURL({ dynamic: true, size: 2048}))
        .addField("Username", user.username, true)
        .addField("Discriminator", user.discriminator, true)
        .addField("Highest Role", member.roles.highest, true)
        .addField("Joined Discord", user.createdAt, true)
        .addField("Joined This Server", member.joinedAt, true)
        .addField("Authorization Permissions", isAuthorized, true)
        message.channel.send(embed)

        isAuthorized = "False"
    }
}