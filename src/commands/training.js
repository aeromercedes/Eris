const Discord = require('discord.js')
const SessionPing = require('../configuration/config.json').Config.session_ping

module.exports = {
    name: 'training',

    execute(message, args, client) {
        if(message.member.roles.cache.find(r => r.id == "835802322813845546" || r.id == "835802099513294850")) {
            const channel = client.channels.cache.get(require('../configuration/config.json').Config.session_channel)

            const embed = new Discord.MessageEmbed()
            .setTitle("Training Session")
            .setThumbnail("https://media.discordapp.net/attachments/839894058385145896/839896331320295535/image0.png")
            .setDescription(`A Training session is being hosted by ${message.author} and will begin in 10 minutes, if you are interested in ranking up we suggest you attend.`)
            .addField('Center Link', 'https://www.roblox.com/games/6723064164/TRAIN-Golosita-Training-Center')
            .setColor("#ffbf00")
            message.reply('now hosting a **training session** :white_check_mark:')
            channel.send(`<@&839907533976240198>`, embed)
        }
    }
}