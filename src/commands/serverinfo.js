const Discord = require('discord.js');
const moment = require('moment')

module.exports = {
    name: 'serverinfo',
    description: 'Get the server info',
    guildOnly: true,
    cooldown: 5,

    execute(message, args) {
        if (message.author.bot) return;

        const regions = {
            "brazil": "Brazil",
            "europe": "Europe",
            "hong-kong": "Hong Kong",
            "india": "India",
            "japan": "Japan",
            "russia": "Russia",
            "singapore": "Singapore",
            "south africa": "South Africa",
            "sydney": "Sydney",
            "us-central": "US Central",
            "us-east": "US East",
            "us-south": "US South",
            "us-west": "US West"
        };

        const verifictionLevels = {
            "NONE": "**None** `No verification` 🔘",
            "LOW": "**Low** `Must have a verified email.` 🟢",
            "MEDIUM": "**Medium** `Must be a Discord Member for at least 5 minutes with a verified email.` 🟡",
            "HIGH": "**High** `Must be a member in the server for at least 10 minutes with a verified email.` 🟠",
            "VERY_HIGH": "**Highest** `Must have a verified phone number attached to the account. Includes other verification levels.` 🔴"
        };

        const yesno = {
            "YES": ":white_check_mark:",
            "NO": "<:redcross:758380151238033419>"
        }

        const dnd = message.guild.members.cache.filter(m => m.presence.status === 'dnd').size;
        const idle = message.guild.members.cache.filter(m => m.presence.status === 'idle').size;
        const offline = message.guild.members.cache.filter(m => m.presence.status === 'offline').size;
        const online = message.guild.members.cache.filter(m => m.presence.status === 'online').size;

        const embed = new Discord.MessageEmbed()
            .setColor("#ffbf00")
            .setTitle(message.guild.name)
            .setThumbnail(message.guild.iconURL({dynamic: true, size: 2048}))
            .addFields(
                { name: 'Guild Name', value: message.guild.name, inline: true },
                { name: 'Guild ID', value: message.guild.id, inline: true},
                { name: 'Guild Owner', value: message.guild.owner, inline: true },
                { name: 'Guild Creation Date', value: message.guild.createdAt, inline: true },
                { name: 'Region', value: regions[message.guild.region], inline: true },
                { name: 'Verification Level', value: verifictionLevels[message.guild.verificationLevel], inline: true },
                { name: 'Member Status', value: `:red_square: **Do not Disturb**: ${dnd}\n:yellow_square: **Idle**: ${idle}\n:green_square: **Online**: ${online}\n:black_large_square: **Offline**: ${offline}`}
            )

        message.reply(embed)
    }
}
