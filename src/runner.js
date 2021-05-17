const Discord = require('discord.js')
const fs = require('fs')
const cpt = require('crypto')

const chalk = require('chalk')
const auth = require('./configuration/auth.json')

const reverseString = require('./functions/reverseString')
const log = require('./functions/log')
const Configuration = require('./configuration/config.json').Config
const FilteredWords = require('./configuration/filter.json')

const client = new Discord.Client()
const cooldowns = new Discord.Collection()
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'))
const prefix = Configuration.prefix
const administrators = Configuration.administrators

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}
client.login(auth.authorization_key)

client.on('ready', function() {
    log("success", "Logged in!")

    client.user.setActivity("Golosita | Made by str#0002", {
        type: "STREAMING",
        url: "https://www.twitch.tv/Roblox"
    });
});

client.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    if (!message.guild.me.hasPermission("VIEW_MESSAGES")) return;
    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return;

    if (message.content.charAt(0) == prefix) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName);

        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return;

        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Discord.Collection());
        }

        if (command.ownerOnly == true && !administrators.includes(message.author.id)) {
            const noaccess = new Discord.MessageEmbed()
            .setDescription('__**Error**__\nYou do not have enough authorization to execute this command.\nThis command is flagged as `ownerOnly`.')
            .setTitle(":name_badge: Authorization Missing")
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")
            return message.channel.send(noaccess)
        }

        if (command.administratorOnly == true && !message.author.id == "727887715869261864") {
            const noaccess = new Discord.MessageEmbed()
            .setDescription('__**Error**__\nThis command is restricted to **ONLY** str#0002.')
            .setTitle(":name_badge: Authorization Missing")
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")
            return message.channel.send(noaccess)
        }

        if (command.guildOnly && message.channel.type === 'dm') {
            return message.reply('That command is flagged as `guildOnly`.');
        }

        try {
            command.execute(message, args, client);
        } catch (error) {
            let errId = "AERO_ERR:" + cpt.randomBytes(12).toString('hex');

            const errEmbed = new Discord.MessageEmbed()
                .setTitle("Oops..")
                .setDescription("Golosita Client couldn't execute this command with this error:\n```\n" + error + "\n```\nReport this error to <@727887715869261864> with error code:\n`" + errId + "`")
                .setColor("RED")
            message.reply(errEmbed);
            //console.log(chalk.bgRed(error + "\nError Code: " + errId))
            console.error(error)
        }
    }

    // filter

        /*const msg = message.content.split(' ')

        if (FilteredWords.some(word => message.content.toLowerCase().includes(word))) {
            if (message.author.bot) return;
            message.delete({ timeout: 0 }).then(() => {
                const embed = new Discord.MessageEmbed()
                .setTitle(':name_badge: Hey!')
                .setDescription('__**You are not allowed to say this word!**__ :rage:')
                .setColor("#ffbf00")
                .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
        
                message.channel.send(message.author, embed)
            })
        }*/
});

client.on('guildMemberAdd', member => {
    const embed = new Discord.MessageEmbed()
    .setTitle(":wave: | Welcome to Golosita!")
    .setFooter("Enjoy your time at Golosita!")
    .setDescription(`Hey, ${member}! Welcome to Golosita Discord Server. Consider:\n:orange_book: **Reading rules and joining our group in <#840696023050616862>**\n:white_sun_rain_cloud: **Got a suggestion about Golosita? Share it in** <#840697029256413195>\n:question: **Don't know where to get notified for interviews or trainings? Head to <#840696470184263690>!**`)
    .setThumbnail(member.user.avatarURL({ dynamic: true, size: 4096}))
    .setColor("#ffbf00")

    const channel = client.channels.cache.get("840696939217420298")
    channel.send(member, embed)
})
