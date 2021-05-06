const Discord = require('discord.js')

module.exports = {
    name: "status",
    ownerOnly: true,

    execute(message, args, client) {

        if (!args[0] || !args[1]) {
            const noaccess = new Discord.MessageEmbed()
            .setDescription('__**Error**__\n 1 Argument is missing')
            .setTitle(":name_badge: Command Error")
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")
           return message.reply(noaccess)
        }

        const status = []

        status.type = args[0]
        status.mode = args[1]
        status.status = args.slice(2).join(" ")

        console.log(status)

        client.user.setPresence({
            activity: {
                name: status.status,
                type: status.type.toUpperCase()
            },
            status: status.mode.toLowerCase()
        })

        const noaccess = new Discord.MessageEmbed()
        .setDescription(`Successfully changed status to: ${status.type} ${status.status} | ${status.mode}`)
        .setTitle(":white_check_mark: Success!")
        .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
        .setColor("#ffbf00")
        return message.reply(noaccess)

    }
}
