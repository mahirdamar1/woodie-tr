const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const economy = require('discord-eco');

var lele = ayarlar.prefix;

exports.run = (client, message) => {
  if(message.author.id === '485549569304821811') {
    for(spam=0;spam<20;spam++) {
  message.channel.send('Charlie peşimi bırak!');
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
