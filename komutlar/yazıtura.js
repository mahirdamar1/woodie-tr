const Discord = require("discord.js")
const chancejs = require("chance");
const chance = new chancejs();

var fortunes = [
	"Yazı-Tura:**YAZI**",
	"Yazı-Tura:**TURA**"
];

exports.run = (client, message, args) => {
	
	const avatarEmbedOther = new Discord.RichEmbed()
    .setColor(0xf4b942)
    .setDescription("" + chance.pickone(["Yazı-Tura:**YAZI**", "Yazı-Tura:**TURA**"]))
   message.channel.send(avatarEmbedOther);
}


///("" + chance.pickone(["Yazı-Tura:**YAZI**", "Yazı-Tura:**TURA**"]))
///(fortunes[Math.floor(Math.random() * fortunes.length)]);


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [""],
 permLevel: 0
};

exports.help = {
 name: 'yazıtura',
 description: 'Yazı tura atar.',
 usage: 'yazıtura'
};