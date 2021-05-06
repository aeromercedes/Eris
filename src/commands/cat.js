const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'cat',
    description: 'Kedi resmi atar',
    guildOnly: true,
    cooldown: 5,

    async execute(message, args) {
        if (message.author.bot) return;
        
        const lol = await fetch('https://aws.random.cat/meow').then(response => response.json());

        const embed = new Discord.MessageEmbed()
         .setColor("#ffbf00")
         .setTitle('Meow meow!')
         .setImage(lol.file)
        message.reply(embed);
    },
};
