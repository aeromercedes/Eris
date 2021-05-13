const Discord = require('discord.js')
const log = require('../functions/log')
const ytdl = require('ytdl-core')

module.exports = {
    "name": "radio",
    "description": "Play KeyFM",

    async execute(message, args, client) {
        if(!message.member.voice.channel) {
            const novc = new Discord.MessageEmbed()
            .setDescription('__**Error**__\nYou are not in a voice channel!')
            .setTitle(":name_badge: Command Error")
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")
            return message.channel.send(novc)
        } else if (!args[0]) {
            const noArgs = new Discord.MessageEmbed()
            .setDescription('__**Error**__\nThere are no arguments!\nAvailable arguments:\npal, metro, fenomen, power, niceguys')
            .setTitle(":name_badge: Command Error")
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")
            return message.channel.send(noArgs)
        } else if(message.member.voice.channel) {
            if (args[0].toLowerCase() == "metro") {
                broadcast = client.voice.createBroadcast()

                const connection = await message.member.voice.channel.join()
                connection.play(broadcast)           
                broadcast.play(await ytdl("https://www.youtube.com/watch?v=636AKV77yAI"))
                log("info", "Loading Metro FM")
                
                const embed = new Discord.MessageEmbed()
                .setTitle(":musical_note: Radio")
                .setDescription(":white_check_mark: Radio loaded: **Metro FM**\n")
                .setFooter('Please give the bot a moment to load the audio.')
                .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
                .setColor("#ffbf00")
                message.reply(embed)
            } else if (args[0].toLowerCase() == "pal") {
                broadcast = client.voice.createBroadcast()

                const connection = await message.member.voice.channel.join()
                connection.play(broadcast)           
                broadcast.play(await ytdl("https://www.youtube.com/watch?v=Mq1y-lu_-Zc"))   
                log("info", "Loading Pal Station")  
                
                const embed = new Discord.MessageEmbed()
                .setTitle(":musical_note: Radio")
                .setDescription(":white_check_mark: Radio loaded: **Pal Station**\n")
                .setFooter('Please give the bot a moment to load the audio.')
                .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
                .setColor("#ffbf00")
                message.reply(embed)
            } else if (args[0].toLowerCase() == "fenomen") {
                broadcast = client.voice.createBroadcast()

                const connection = await message.member.voice.channel.join()
                connection.play(broadcast)           
                broadcast.play(await ytdl("https://www.youtube.com/watch?v=IF70iqaTiRY"))
                log("info", "Loading Fenomen FM")
                
                const embed = new Discord.MessageEmbed()
                .setTitle(":musical_note: Radio")
                .setDescription(":white_check_mark: Radio loaded: **Fenomen FM**\n")
                .setFooter('Please give the bot a moment to load the audio.')
                .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
                .setColor("#ffbf00")
                message.reply(embed)
            } else if (args[0].toLowerCase() == "power") {
                broadcast = client.voice.createBroadcast()

                const connection = await message.member.voice.channel.join()
                connection.play(broadcast)           
                broadcast.play(await ytdl("https://www.youtube.com/watch?v=sFEAsC5flco"))
                log("info", "Loading Power FM")   
                
                const embed = new Discord.MessageEmbed()
                .setTitle(":musical_note: Radio")
                .setDescription(":white_check_mark: Radio loaded: **Power FM**\n")
                .setFooter('Please give the bot a moment to load the audio.')
                .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
                .setColor("#ffbf00")
                message.reply(embed)
            } else if (args[0].toLowerCase() == "niceguys") {
                broadcast = client.voice.createBroadcast()

                const connection = await message.member.voice.channel.join()
                connection.play(broadcast)           
                broadcast.play(await ytdl("https://www.youtube.com/watch?v=oVi5gtzTDx0"))
                log("info", "Loading Nice Guys FM")   
                
                const embed = new Discord.MessageEmbed()
                .setTitle(":musical_note: Radio")
                .setDescription(":white_check_mark: Radio loaded: **Nice Guys FM**\n")
                .setFooter('thanks hailee <3')
                .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
                .setColor("#ffbf00")
                message.reply(embed)

            }
        }
    }
}
