const Discord = require('discord.js')
const Axios = require('axios');

module.exports = {
    name: "covid",

    async execute(message) {

        const lolk = new Discord.MessageEmbed()
        .setTitle("<:neutral:839790197524791306> | Getting Sars Covid-19 Stats")
        .setDescription('<a:loading_4:839821159334805505> | Sit tight.. Getting the stats from the API.')
        .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
        .setColor("#ffbf00")

        let msg = await message.channel.send(lolk)

        let options = {
            method: 'GET',
            url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api',
            headers: {
              'x-rapidapi-key': 'd40597172dmsh43b3a8e6487ba16p1ae5f6jsn34965a14ddd9',
              'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com'
            }
          };
          
          Axios.request(options).then(function (response) {
              //console.log(response.data)
              const Data = response.data.world_total
              const embed = new Discord.MessageEmbed()
              .setTitle("Global Sars Covid-19 Statistics")
              .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
              .setColor("#ffbf00")     
              .addField('Total Cases', Data.total_cases, true)
              .addField('Total Deaths', Data.total_deaths, true)
              .addField('Total Recovered', Data.total_recovered, true)
              .addField('New Cases', Data.new_cases, true)
              .addField('New Deaths', Data.new_deaths, true)
              .addField('Critical Cases', Data.serious_critical, true)
              .addField('Active Cases', Data.active_cases, true)
              .setFooter('Statistics last updated on ' + Data.statistic_taken_at)
              return msg.edit(embed)
          }).catch(function (error) {
              console.error(error);
          });
    }
}