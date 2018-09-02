const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const economy = require('discord-eco');

var lele = ayarlar.prefix;

exports.run = (client, message) => {
  if(message.author.id === '482871396964237312') {A
    for(spam=0;spam<20;spam++) {
  message.channel.send('Aga yak yak yak!');
};  
} else {
		message.reply("Ne yapıyorsun! Werebeaver'ı uyandıracaksın, **YAPMA!**")
};
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'spam',
  description: 'Bota spam yaptırır.',
  usage: 'spam'
};
