const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'dog',
    guildOnly: true,
    cooldown: 5,

    async execute(message, args) {
        if (message.author.bot) return;
        
        const lol = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());

        const embed = new Discord.MessageEmbed()
         .setColor("#ffbf00")
         .setTitle('Woof woof!')
         .setImage(lol.message)
        message.reply(embed);
    },
};
