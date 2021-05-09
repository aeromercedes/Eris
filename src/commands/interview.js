const Discord = require('discord.js')
const SessionPing = require('../configuration/config.json').Config.session_ping

module.exports = {
    name: 'interview',

    execute(message, args, client) {
        if(message.member.roles.cache.find(r => r.id == "840700361693986836" || r.id == "840700329557491712")) {
            const channel = client.channels.cache.get(require('../configuration/config.json').Config.session_channel)

            const embed = new Discord.MessageEmbed()
            .setTitle("Interview Session")
            .setThumbnail("https://media.discordapp.net/attachments/839894058385145896/839896331320295535/image0.png")
            .setDescription(`An interview session is being hosted by ${message.author} and will begin in 10 minutes, if you are interested in becoming a worker we suggest you attend`)
            .addField('Center Link', 'https://www.roblox.com/games/6757345388/JOB-Golosita-Interview-Center')
            .setColor("#ffbf00")
            message.reply('now hosting an **interview session** :white_check_mark:')
            channel.send(`<@&839907533976240198>`, embed)
        }
    }
}
