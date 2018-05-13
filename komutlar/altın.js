const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const economy = require('discord-eco');

var lele = ayarlar.prefix;

exports.run = (client, message) => {

  let sender = message.author;
  let cont = message.content.slice(lele.length).split(" ");
  let args = cont.slice(1);
  var msg = message.content.toLowerCase();

  economy.fetchBalance(message.author.id).then((i) => { 

    const embed = new Discord.RichEmbed()
        .setDescription(`**${message.guild.name} Bankası**`)
        .setColor(0xD4AF37) 
        .addField('Hesap sahibi',message.author.username,true)
        .addField('Altın Miktarı',i.money,true)
    message.channel.send({embed})

})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'altın',
  description: 'Altın miktarınızı gösterir.',
  usage: 'altın'
};
