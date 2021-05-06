const Discord = require('discord.js');

module.exports = {
    name: 'solar',
    description: 'haha funny simp!!!',
    guildOnly: true,
    cooldown: 5,

    execute(message, args) {
        const Neptune = `
        Neptune is the eighth and farthest-known Solar planet from the Sun. 
        In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. 

        It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere.
        The planet orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km; 2.8 billion mi). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident.
        `
        const Uranus = `
        Uranus is the seventh planet from the Sun. 
        Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the grandfather of Zeus (Jupiter) and father of Cronus (Saturn). 
        It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. 

        Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. 
        For this reason, scientists often classify Uranus and Neptune as "ice giants" to distinguish them from the other gas giants. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more "ices" such as water, ammonia, and methane, along with traces of other hydrocarbons.16] It has the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds.
        The interior of Uranus is mainly composed of ices and rock.
        `
        const Mars = `
        Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. 
        In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".
        The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.

        Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth. 
        The days and seasons are comparable to those of Earth, because the rotational period as well as the tilt of the rotational axis relative to the ecliptic plane are similar. Mars is the site of Olympus Mons, the largest volcano and highest known mountain on any planet in the Solar System, and of Valles Marineris, one of the largest canyons in the Solar System. 
        The smooth Borealis basin in the Northern Hemisphere covers 40% of the planet and may be a giant impact feature.
        Mars has two moons, Phobos and Deimos, which are small and irregularly shaped. These may be captured asteroids, similar to 5261 Eureka, a Mars trojan.
        `
        const Earth = `
        Earth is the third planet from the Sun and the only astronomical object known to harbor life.
        About 29% of Earth's surface is land consisting of continents and islands. 
        The remaining 71% is covered with water, mostly by oceans, seas, gulfs, and other salt water bodies, but also by lakes, rivers, and other fresh water, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. 
        Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years. Earth's interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convecting mantle that drives plate tectonics.

        Earth's atmosphere consists mostly of nitrogen and oxygen. More solar energy is received by tropical regions than polar regions, and is redistributed by atmospheric and ocean circulation. Greenhouse gases also play an important role in regulating the surface temperature. 
        A region's climate is not only determined by latitude, but also by elevation, and by proximity to moderating oceans, among other factors. 
        Extreme weather, such as tropical cyclones and heat waves, occurs in most areas and has a large impact on life.
        `
        const Venus = `
        Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. 
        As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.
        Venus lies within Earth's orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a little while before dawn. 
        Venus orbits the Sun every 224.7 Earth days.

        With a rotation period of 243 Earth days, it takes longer to rotate about its axis than any other planet in the Solar System by far, and does so in the opposite direction to all but Uranus (meaning the Sun rises in the west and sets in the east).
        Venus does not have any moons, a distinction it shares only with Mercury among the planets in the Solar System.
        Venus is a terrestrial planet and is sometimes called Earth's "sister planet" because of their similar size, mass, proximity to the Sun, and bulk composition. 
        It is radically different from Earth in other respects. It has the densest atmosphere of the four terrestrial planets, consisting of more than 96% carbon dioxide. The atmospheric pressure at the planet's surface is about 92 times the sea level pressure of Earth, or roughly the pressure at 900 m (3,000 ft) underwater on Earth. 
        Even though Mercury is closer to the Sun, Venus has, by far, the hottest surface of any planet in the Solar System, with a mean temperature of 737 K (464 °C; 867 °F). Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid, preventing its surface from being seen from space in visible light. It may have had water oceans in the past, but these would have vaporized as the temperature rose due to a runaway greenhouse effect.
        The water has probably photodissociated, and the free hydrogen has been swept into interplanetary space by the solar wind because of the lack of a planetary magnetic field.
        `
        const Jupiter = `
        Jupiter is the fifth planet from the Sun and the largest in the Solar System. 
        It is a gas giant with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined. 
        Jupiter is the third-brightest natural object in the Earth's night sky after the Moon and Venus. It has been observed since pre-historic times and is named after the Roman god Jupiter.

        Jupiter is primarily composed of hydrogen, but helium comprises one quarter of its mass and one tenth of its volume. It likely has a rocky core of heavier elements, but like the other giant planets, Jupiter lacks a well-defined solid surface. 
        The on-going contraction of its interior generates heat greater than the amount received from the Sun. Because of its rapid rotation, the planet's shape is that of an oblate spheroid; it has a slight but noticeable bulge around the equator. The outer atmosphere is visibly segregated into several bands at different latitudes, with turbulence and storms along their interacting boundaries. 
        A prominent result of this is the Great Red Spot, a giant storm that is known to have existed since at least the 17th century, when it was first seen by telescope.
        `
        const Mercury = `
        Mercury is the smallest and closest planet to the Sun in the Solar System. 
        Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System. 
        It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes (Ἑρμῆς).

        Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and its apparent distance from the Sun as viewed from Earth never exceeds 28°. 
        This proximity to the Sun means the planet can only be seen near the western horizon after sunset or the eastern horizon before sunrise, usually in twilight. 
        At this time, it may appear as a bright star-like object, but is often far more difficult to observe than Venus. 
        The planet telescopically displays the complete range of phases, similar to Venus and the Moon, as it moves in its inner orbit relative to Earth, which recurs over its synodic period of approximately 116 days.
        `
        const Saturn = `
        Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.
        It is a gas giant with an average radius of about nine times that of Earth.
        It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.
        Saturn is named after the Roman god of wealth and agriculture; its astronomical symbol (♄) represents the god's sickle. The Romans named the seventh day of the week Saturday, Sāturni diēs no later than the 2nd century for the planet Saturn.
        Saturn's interior is most likely composed of a core of iron–nickel and rock (silicon and oxygen compounds). 
        Its core is surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and finally a gaseous outer layer. 

        Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere. 
        An electrical current within the metallic hydrogen layer is thought to give rise to Saturn's planetary magnetic field, which is weaker than the Earth's, but which has a magnetic moment 580 times that of Earth due to Saturn's larger size.
        Saturn's magnetic field strength is around one-twentieth of Jupiter's.
        The outer atmosphere is generally bland and lacking in contrast, although long-lived features can appear. 
        Wind speeds on Saturn can reach 1,800 km/h (1,100 mph; 500 m/s), higher than on Jupiter but not as high as on Neptune.
        In January 2019, astronomers reported that a day on the planet Saturn has been determined to be 10h 33m 38s + 1m 52s + 1m 19s , based on studies of the planet's C Ring.
        `

        if (!args[0]) {
            const errorEbed = new Discord.MessageEmbed()
            .setDescription('__**Error**__\nArgument is missing!\nAvailable options: neptune, uranus, saturn, jupiter, mars, earth, venus, mercury')
            .setThumbnail("https://cdn.discordapp.com/icons/834557953264713769/224dea1238ac4e8f40adaf731ce3a49c.png")
            .setColor("#ffbf00")   
            .setTitle(":name_badge: Command Error")
            return message.channel.send(errorEbed)
        }

        if (args[0] == "earth") {
            const embed = new Discord.MessageEmbed()
            .setTitle("Solar System [Earth]")
            .setDescription(Earth)
            .setColor("#ffbf00")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg")
            return message.channel.send(embed)
        } else if (args[0] == "mars") {
            const embed = new Discord.MessageEmbed()
            .setTitle("Solar System [Mars]")
            .setDescription(Mars)
            .setColor("#ffbf00")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg")
            return message.channel.send(embed)
        } else if (args[0] == "venus") {
            const embed = new Discord.MessageEmbed()
            .setTitle("Solar System [Venus]")
            .setDescription(Venus)
            .setColor("#ffbf00")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/c/c7/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped%29.jpg")
            return message.channel.send(embed)
        } else if (args[0] == "saturn") {
            const embed = new Discord.MessageEmbed()
            .setTitle("Solar System [Saturn]")
            .setDescription(Saturn)
            .setColor("#ffbf00")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg")
            return message.channel.send(embed)
        } else if (args[0] == "uranus") {        
            const embed = new Discord.MessageEmbed()
            .setTitle("Solar System [Uranus]")
            .setDescription(Uranus)
            .setColor("#ffbf00")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg")
            return message.channel.send(embed)
        } else if (args[0] == "neptune") {
            const embed = new Discord.MessageEmbed()
            .setTitle("Solar System [Neptune]")
            .setDescription(Neptune)
            .setColor("#ffbf00")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg")
            return message.channel.send(embed)
        } else if (args[0] == "jupiter") {
            const embed = new Discord.MessageEmbed()
            .setTitle("Solar System [Jupiter]")
            .setDescription(Jupiter)
            .setColor("#ffbf00")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg")
            return message.channel.send(embed)
        } else if (args[0] == "mercury") {
            const embed = new Discord.MessageEmbed()
            .setTitle("Solar System [Mercury]")
            .setDescription(Mercury)
            .setColor("#ffbf00")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg")
            return message.channel.send(embed)
        }
    }
}