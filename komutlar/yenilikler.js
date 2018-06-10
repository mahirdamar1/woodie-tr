const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setDescription("Yenilik her zaman iyidir")
    .setThumbnail("http://fantasyva.com/wp-content/uploads/2017/08/new-sign-ID-33314.png")
    .setColor(0x00AE86)
    .addField('Müzik komutları eklendi: ', `Artık botumuzla müzik dinleyebileceksiniz ^^.`)
    .addField("Müzik Komutları: ", "-help müzik")
    .setDescription(`**-join**:Mesajı gönderenin kanalına katılır.
**-leave**:Mesajı gönderenin kanalından ayrılır.
**-add**: Link/Şarkı adı ile sıraya şarkı ekler.
**-queue**:Kuyruğu gösterir.
**-play**:Sıradaki şarkıyı oynatır.
:AŞAĞIDAKI KOMUTLAR YALNIZCA PLAY KOMUTU ÇALIŞIYORKEN ÇALIŞIR:
**-pause**:Müziği duraklatır.
**-resume**:Müziği sürdürür.
**-skip**:Çalmakta olan şarkıyı atlar.
**-volume+(+++)**:Ses şiddetini 2%/+ kadar arttırır.
**-volume-(---)**:Ses şiddetini 2%/- kadar azaltır.`)
    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yenilikler', 
  description: 'Yenilik her zaman iyidir',
  usage: 'yenilikler'
};
