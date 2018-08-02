const Discord = require('discord.js');
exports.run = function(client, message, args) {

  if (!message.guild) {
    return message.author.send('`temizle` komutu sadece sunucularda kullanılabilir.');
  }
  let mesajsayisi = args.slice(0).join(' ');
  if (!mesajsayisi) return message.channel.send('Kaç mesaj silmem gerektiğini belirtmedin.')
  if (mesajsayisi > 100) return message.channel.send('100 adetden fazla mesaj silemem!');
  message.channel.bulkDelete(mesajsayisi);
  
  message.channel.send("**Fısfıs** *" + mesajsayisi + "* **tane yazı temizledi ^^**").then(msg => {msg.delete(5000)});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'fısfıs',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'fısfıs <temizlenecek mesaj sayısı>'
};
