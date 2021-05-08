module.exports = {
    name: 'help',
    guildOnly: true,
    cooldown: 5,

    execute(message, args, client) {
        const Discord = require('discord.js')
        const fs = require('fs')
       // const commandsArray = []
       // const commandsPos = 0
        //const fs = require('fs')

        //fs.readdirSync('../').filter(file => file.endsWith('.js')).forEach(element => {
        //    commandsPos = commandsPos + 1
        //    commandsArray[commandsPos] = element
        //});

       // let comms="";

        //for(i=0;i<commandsArray.length;i++) {
        //    comms=comms+commandsArray[i]+"\n";
       // }

        const embed = new Discord.MessageEmbed()
        .setTitle("Commands List 📡")
        .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
        .setColor("#ffbf00")
        //.setDescription(comms)
        .addField("**Administrative Commands**", "`kick, ban, members, purge, serverinfo, userinfo`")
        .addField("**Fun Commands**", "`cat, dog, solar, 8ball, howsimp, weather`")
        .addField("**Miscellaneous Commands**", "`stats, help, prefix, covid, rule`")
        .addField("**Music Commands**", "`badapple, radio, disconnect`")
        .addField("**Staff Commands**", "`shift, interview, training`")
        .addField("**Administrator Only**", "`reload, status, systemdm`")
        .setFooter(`26 commands currently installed.`)

        message.channel.send(embed)
    }
}
