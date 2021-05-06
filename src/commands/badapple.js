const Discord = require('discord.js')
const log = require('../functions/log')
const ytdl = require('ytdl-core')

module.exports = {
    "name": "badapple",
    "description": "Play KeyFM",

    async execute(message, args, client) {
        if(!message.member.voice.channel) {
            const novc = new Discord.MessageEmbed()
            .setDescription('__**Error**__\nYou are not in a voice channel!')
            .setTitle(":name_badge: Command Error")
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")
            return message.channel.send(novc)
        } else if(message.member.voice.channel) {
                broadcast = client.voice.createBroadcast()

            const connection = await message.member.voice.channel.join()
            connection.play(broadcast)           
            broadcast.play(await ytdl("https://www.youtube.com/watch?v=FtutLA63Cp8"))
            log("info", "Playing bad apple")
                
            const embed = new Discord.MessageEmbed()
            .setTitle(":musical_note: Radio")
            .setDescription(":white_check_mark: **Playing bad apple**\n")
            .setFooter('Please give the bot a moment to load the audio.')
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")
            message.reply(embed)
        
        }
    }
}
