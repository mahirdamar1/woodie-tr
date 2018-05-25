const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const economy = require('discord-eco');

var prefix = ayarlar.prefix;

var fortunes = [
  "evet",
  "hayır",
  "belki",
  "olabilir",
  "olmayabilir",
  "daha sonra tekrar sor"
];

exports.run = (client, message) => {
message.channel.send(`**Arkadaşlar, Bir YouTube kanala davet edildiniz. 
Bu kanalda Kendi oyunlarınızı ve kendi discord botunuzu kodlamayı öğreneceksiniz!... 
Ayrıca ufak tefek oyun videoları ve çekilişlerle eğlencenize eğlence katacağız :3**

Botumu sunucunuza ekleyin:

**https://is.gd/ybHl0c**

Kanal Uzun link:
**https://www.youtube.com/channel/UC0tkTcxf5F3DdR3RJtaAuXg**

Kanal Kısa Link:
**https://is.gd/p4AEph**

Şimdiden tüm takipçilerime teşekkürler :3
@everyone `)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'reklam',
  description: 'Bota reklam yaptırır.',
  usage: 'reklam'
};
