const Discord = require('discord.js')
const log = require('../functions/log')

module.exports = {
    name: 'systemdm',
    ownerOnly: true,

    execute(message, args, client) {
        let muser2 = message.mentions.users.first() || client.users.cache.get(args[0])
        const messageArray = message.content.split(' ')
        const args2 = messageArray.slice(1)
        const reason = args2.slice(1).join(' ')

        if (!muser2) {
            const noaccess = new Discord.MessageEmbed()
            .setDescription('__**Error**__\n Argument as an mentioned user is missing')
            .setTitle(":name_badge: Command Error")
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")
           return message.reply(noaccess)
        }

        if (!reason) {
            const noaccess = new Discord.MessageEmbed()
            .setDescription('__**Error**__\nMessage argument is missing!')
            .setTitle(":name_badge: Command Error")
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")
           return message.reply(noaccess)
        }

        if (reason && muser2) {

            function makeSystemDM(msg, author) {
                if (!msg || !author) {
                    return console.warn("[!] makeSystemDM Function: msg or author parameter is missing")
                }

                const embed = new Discord.MessageEmbed()
                .setTitle("<:system:839776584508375060> DM | Golosita Administration")
                .setDescription(`<:yes:839790198958194688> This is an official Golosita message from a high ranking person, ${author}. If you think that this bot is fake, consider checking the Discord server itself.`)
                .addField("Message:", msg)
                .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
                .setColor("#ffbf00")

                return embed
            }

            muser2.send(makeSystemDM(reason, message.author))
            message.channel.send(":white_check_mark: **DMed** `" + muser2.username + "`**!**")
            log('info', `${message.author.tag} has DMed ${muser2.tag} via systemDM command.`)
        }
    }
}