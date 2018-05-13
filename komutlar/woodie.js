const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');


var lele = ayarlar.prefix;

exports.run = (client, message) => {


      const embedede = new Discord.RichEmbed()
          .setDescription(`**Woodie**`) 
          .setThumbnail("https://vignette.wikia.nocookie.net/dont-starve-game/images/2/23/Woodie.png/revision/latest/scale-to-width-down/350?cb=20140330212814") 
          .setColor(0x00AE86) 
          .addField('Lakabı',`The Lumberjack (Oduncu)`, true)
		  .addField('Yetenek',`
		       *Çok güzel bir baltası var
		  *Korkunç bir sırrı var (Werebeaver)
		  `,true)
          .addField('Motto',`That's nice tree, eh? (güzel ağaç, ha?)`, true)
          .addField('Can',`150`, true)
          .addField('Açlık', `150`, true)
          .addField('Akıl Sağlığı',"200", true)
          .addField('Özel Eşya', "Lucy the Axe (Balta Lucy)", true)
		  .addField('Başlangıç Eşyası', "Lucy the Axe (Balta Lucy)", true)

          
          message.channel.send(embedede);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'woodie',
  description: 'Woodie The Lumberjack hakkında bilgi verir.',
  usage: 'woodie'
};
