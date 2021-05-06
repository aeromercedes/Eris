const Axios = require('axios')
const Discord = require('discord.js');

function fixInteger(integer) {
    let n = integer;
    n = n + "";
    let output = n.slice(0, 4);
    return output
}

module.exports = {
    name: "weather",
    
    execute(message, args) {

        if (!args[0]) {
            const noaccess = new Discord.MessageEmbed()
            .setDescription('__**Error**__\nZip code argument is missing!\n**Only use United States zip code**')
            .setTitle(":name_badge: Command Error")
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")
            return message.channel.send(noaccess)    
        }

        const options = {
            method: 'GET',
            url: 'https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode',
            params: {zip: args[0]},
            headers: {
              'x-rapidapi-key': 'd40597172dmsh43b3a8e6487ba16p1ae5f6jsn34965a14ddd9',
              'x-rapidapi-host': 'us-weather-by-zip-code.p.rapidapi.com'
            }
          };
          
          Axios.request(options).then(function(response) {
                if (response.data == 'Zip Code not found\n') {
                    const noaccess = new Discord.MessageEmbed()
                    .setDescription('__**Error**__\nUS zip code not found!')
                    .setTitle(":name_badge: Command Error")
                    .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
                    .setColor("#ffbf00")
                    return message.channel.send(noaccess)    
                }

                const Data = response.data
                const embed = new Discord.MessageEmbed()
                .setTitle(`Weather in ${Data.City}, ${Data.State}`)
                .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
                .setColor("#ffbf00")       
                .addField("Temperature (Fahrenheit)", Data.TempF)
                .addField("Tempurature (Celsius)", Data.TempC)
                .addField("Weather Status", Data.Weather)
                .addField("Wind Direction", Data.WindDir)
                .addField("Wind Speed", `${Data.WindMPH} MP/H, ${fixInteger(Data.WindMPH*1.6)} KM/H`)
                return message.reply(embed)

          }).catch(function (error) {
              console.error(error);
          });
    }
}

/*

                const Data = response.data
                const embed = new Discord.MessageEmbed()
                .setTitle(`Weather in ${Data.City}, ${Data.State}`)
                .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
                .setColor("#ffbf00")       
                .addField("Temperature (Fahrenheit)", Data.TempF)
                .addField("Tempurature (Celsius)", Data.TempC)
                .addField("Weather Status", Data.Weather)
                .addField("Wind Direction", Data.WindDir)
                .addField("Wind Speed", `${Data.WindMPH} MP/H, ${fixInteger(Data.WindMPH*1.6)} KM/H`)
                return message.reply(embed)
*/