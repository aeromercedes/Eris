const Discord = require('discord.js');
const fetch = require('node-fetch');
const os = require('os')

module.exports = {
  name: 'stats',
  description: 'Show Satellite\'s stats',

  async execute(message, args, client) {

    const totalRam = Math.floor(os.totalmem() / 1000000000)
    const freeRam = Math.floor(os.freemem() / 1000000000)

    const embed = new Discord.MessageEmbed()
    .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
    .setColor("#ffbf00")
    .setTitle("Satellite Stats")
    .addField("CPUs", os.cpus().length, true)
    .addField("Ram", `Installed Ram: ${totalRam} GB \nRam Space: ${freeRam} GB`, true)
    .addField("Node Version", process.version, true)
    .addField("Bot Administrator", "<@!727887715869261864>", false)

    message.channel.send(embed)
  },
};