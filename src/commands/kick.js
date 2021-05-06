const Discord  = require('discord.js');
const Configuration = require('../configuration/config.json').Config

const prefix = Configuration.prefix

module.exports = {
    name: 'kick',
    description: 'Kick a member from this guild.',
    guildOnly: true,
    cooldown: 5,

    execute(message, args) {
        if (message.author.bot) return;
        let muser = message.mentions.members.first();
        let muser2 = message.mentions.users.first();
        const messageArray = message.content.split(' ')
        const args2 = messageArray.slice(1)
        const reason = args2.slice(1).join(' ')

        const embed = new Discord.MessageEmbed()
         .setTitle('Kick Command')
         .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
         .setColor("#ffbf00")
         .setDescription(this.description)
         .setTimestamp()
         .addFields(
             {
                 name: 'Usage',
                 value: `${prefix}kick <@User>\n${prefix}kick <@User> [Reason]`
             }
            )
        if (!muser) {
            return message.reply(embed)
        }

        if (!message.member.hasPermission("kick_MEMBERS")) {
            const noaccess = new Discord.MessageEmbed()
             .setDescription('__**Error**__\nYou are not authorised to execute this command\n Missing Permission: `kick Members`')
             .setTitle(":name_badge: Command Error")
             .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
             .setColor("#ffbf00")
            return message.reply(noaccess)
        }

        if (!message.guild.me.hasPermission("kick_MEMBERS")) {
            const noperm = new Discord.MessageEmbed()
             .setDescription('__**Error**__\nI do not have enough permissions to kick.')
             .setTitle(":name_badge: Command Error")
             .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
             .setColor("#ffbf00")
            return message.reply(noperm)
        }

        if (muser.user.bot) {
            const bot = new Discord.MessageEmbed()
             .setDescription('__**Error**__\nYou cannot kick bots.')
             .setTitle(":name_badge: Command Error")
             .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
             .setColor("#ffbf00")
            return message.reply(bot)
        }

        if (muser === message.member) {
            const you = new Discord.MessageEmbed()
             .setDescription('__**Error**__\nYou cannot kick yourself.')
             .setTitle(":name_badge: Command Error")
             .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
             .setColor("#ffbf00")
            return message.reply(you)
        }

        if (muser === message.guild.owner) {
            const owner = new Discord.MessageEmbed()
             .setDescription('__**Error**__\nYou cannot kick this guild\'s owner.')
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
            const grkick = new Discord.MessageEmbed()
            .setTitle(':hammer: Kicked')
            .setDescription(muser2.tag + " has been kicked.")
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
            message.channel.send(grkick)
            muser.kick(reason)
        } else if (!reason) {
            let noreasonkick = new Discord.MessageEmbed()
                .setTitle(':hammer: Kicked')
                .setDescription(`${muser2.tag} has been kicked.`)
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
            message.channel.send(noreasonkick)
            muser.kick(muser2.tag + " was kicked by " + message.author.tag)
        }
    },
};