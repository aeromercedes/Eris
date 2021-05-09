const Discord = require('discord.js')
const SessionPing = require('../configuration/config.json').Config.session_ping

module.exports = {
    name: 'shift',

    execute(message, args, client) {
        if(message.member.roles.cache.find(r => r.id == "840700361693986836" || r.id == "840700329557491712")) {
            const channel = client.channels.cache.get(require('../configuration/config.json').Config.session_channel)

            const embed = new Discord.MessageEmbed()
            .setTitle("Shift Session")
            .setThumbnail("https://media.discordapp.net/attachments/839894058385145896/839896331320295535/image0.png")
            .setDescription(`A Shift is being hosted by ${message.author} at our game! If you are interested, why not go down there and get a refreshing drink and some food?`)
            .addField('V1 Link', 'https://www.roblox.com/games/6706836498/ALPHA-Golosita-Cuisine')
            .setColor("#ffbf00")
            message.reply('now hosting a **shift** :white_check_mark:')
            channel.send(`<@&839907533976240198>`, embed)
        }
    }
}
