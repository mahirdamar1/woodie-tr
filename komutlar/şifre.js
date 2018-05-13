const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const generator = require('generate-password');


var prefix = ayarlar.prefix;


exports.run = (client, message, args) => {
	  let mesaj = args.slice(0).join(' ');
	      if (mesaj === undefined || mesaj.length === 0) {
      message.channel.send('**Geçerli bir sayı belirt.**') 
      return; 
  }

var password = generator.generate({
    length: mesaj,
    numbers: true
});
message.channel.send(password);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'şifre',
  description: 'Rastgele bir şifre oluşturur.',
  usage: 'şifre <uzunluk>'
};
