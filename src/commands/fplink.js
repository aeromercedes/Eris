module.exports = {
    name: "fplink",
    administratorOnly = true,

    async execute(message, args) {
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
        }
        
        broadcast = client.voice.createBroadcast()

        const connection = await message.member.voice.channel.join()
        connection.play(broadcast)           
        broadcast.play(await ytdl(args[0]))
        log("info", "playing fplik")   
        
        const embed = new Discord.MessageEmbed()
        .setTitle(":musical_note: Radio")
        .setDescription(":white_check_mark: done have fun.")
        .setFooter('...')
        .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
        .setColor("#ffbf00")
        message.reply(embed)
    }
}
