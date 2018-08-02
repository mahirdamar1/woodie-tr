const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setDescription("Yenilik her zaman iyidir")
    .setThumbnail("http://fantasyva.com/wp-content/uploads/2017/08/new-sign-ID-33314.png")
    .setColor(0x00AE86)
    .addField("Tic-Tac-Toe (xox) Oyunu Eklendi: ", "Artık botumuz aracılığı ile bir arkadaşınızla xox oyunu oynayabileceksiniz -help xox")
    .setDescription("-tictactoe <@kullanıcı_id> ile arkadaşınız ve sizin arnızda bir oyun başlatın, sıra size gelince -işaretle <satır> <sıra> komutu ile bir işaretleme yap! Sıra ve satırların koordinatları 0 ile 2 arasındadır örnek: -işaretle 0 0 veya -işaretle 2 2")
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
