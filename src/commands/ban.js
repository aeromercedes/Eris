const Discord  = require('discord.js');
const Configuration = require('../configuration/config.json').Config

const prefix = Configuration.prefix

module.exports = {
    name: 'ban',
    description: 'Bans a member from this guild.',
    guildOnly: true,
    cooldown: 5,

    execute(message, args) {
        if (message.author.bot) return;
        let muser = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let muser2 = message.mentions.users.first();
        const messageArray = message.content.split(' ')
        const args2 = messageArray.slice(1)
        const reason = args2.slice(1).join(' ')

        const embed = new Discord.MessageEmbed()
         .setTitle('Ban Command')
         .setDescription(this.description)
         .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
         .setColor("#ffbf00")
         .setTimestamp()
         .addFields(
             {
                 name: 'Usage',
                 value: `${prefix}ban <@User>\n${prefix}ban <@User> [Reason]`
             }
            )

        if (!muser) {
            return message.reply(embed)
        }

        if (!message.member.hasPermission("BAN_MEMBERS")) {
            const noaccess = new Discord.MessageEmbed()
             .setDescription('__**Error**__\nYou are not authorised to execute this command\n Missing Permission: `Ban Members`')
             .setTitle(":name_badge: Command Error")
             .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
             .setColor("#ffbf00")
            return message.reply(noaccess)
        }

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            const noperm = new Discord.MessageEmbed()
             .setDescription('__**Error**__\nI do not have enough permissions to ban.')
             .setTitle(":name_badge: Command Error")
             .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
             .setColor("#ffbf00")
            return message.reply(noperm)
        }

        if (muser.user.bot) {
            const bot = new Discord.MessageEmbed()
             .setDescription('__**Error**__\nYou cannot ban bots.')
             .setTitle(":name_badge: Command Error")
             .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
             .setColor("#ffbf00")
            return message.reply(bot)
        }

        if (muser === message.member) {
            const you = new Discord.MessageEmbed()
             .setDescription('__**Error**__\nYou cannot ban yourself.')
             .setTitle(":name_badge: Command Error")
             .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
             .setColor("#ffbf00")
            return message.reply(you)
        }

        if (muser === message.guild.owner) {
            const owner = new Discord.MessageEmbed()
             .setDescription('__**Error**__\nYou cannot ban this guild\'s owner.')
             .setTitle(":name_badge: Command Error")
             .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
             .setColor("#ffbf00")
            return message.reply(owner)
        }

        if (muser.hasPermission("KICK_MEMBERS")) {
            const adminmod = new Discord.MessageEmbed()
             .setDescription('__**Error**__\nThat user is an administrator or a moderator')
             .setTitle(":name_badge: Command Error")
             .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
             .setColor("#ffbf00")
            return message.reply(adminmod)
        }

        if (reason) {
            const grban = new Discord.MessageEmbed()
            .setTitle(':hammer: Banned')
            .setDescription(muser2.tag + " has been banned.")
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")
            .addFields(
                {
                    name: 'Moderator', value: message.author.tag, inline: true
                },
                {
                    name: 'Member', value: muser2.tag, inline: true
                },
                {
                    name: 'Reason', value: reason, inline: true
                }
            )
            message.channel.send(grban)
            muser.ban({ reason: reason})
        } else if (!reason) {
            let noreasonban = new Discord.MessageEmbed()
                .setTitle(':hammer: Banned')
                .setDescription(`${muser2.tag} has been banned.`)
                .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
                .setColor("#ffbf00")
                .addFields(
                    {
                        name: 'Moderator', value: message.author.tag, inline: true
                    },
                    {
                        name: 'Member', value: muser2.tag, inline: true
                    },
                    {
                        name: 'Reason', value: 'No reason provided', inline: true
                    }
                )
            message.channel.send(noreasonban)
            muser2.ban({reason: 'No reason was provided.'})
        }
    },
};