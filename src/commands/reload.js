const Discord = require('discord.js')

module.exports = {
    "name": "reload",

    execute(message, args, client) {
        if(message.author.id == "727887715869261864") {
            if(!args || args.length < 1) {
                const noaccess = new Discord.MessageEmbed()
                .setDescription('__**Error**__\nCommand argument is **null**')
                .setTitle(":name_badge: Command Error")
                .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
                .setColor("#ffbf00")
               return message.reply(noaccess)
            }
            const commandName = args[0];
    
            if(!client.commands.has(commandName)) {
                const noaccess = new Discord.MessageEmbed()
                .setDescription('__**Error**__\nRequested command not found')
                .setTitle(":name_badge: Command Error")
                .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
                .setColor("#ffbf00")
               return message.reply(noaccess)
            }
    
            delete require.cache[require.resolve(`./${commandName}.js`)];
            client.commands.delete(commandName);
            const props = require(`./${commandName}.js`);
            client.commands.set(commandName, props);

            const reloaded = new Discord.MessageEmbed()
            .setDescription(`**${commandName}** was reloaded successfully`)
            .setTitle(":white_check_mark: Success!")
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")
            message.reply(reloaded)
        } else if(!message.author.id == "727887715869261864") {
            const noaccess = new Discord.MessageEmbed()
            .setDescription('__**Error**__\nMissing authorization: root access required')
            .setTitle(":name_badge: Authorization Missing")
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")
           return message.reply(noaccess)
        } 
    }
}