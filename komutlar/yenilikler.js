const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setDescription("Yenilik her zaman iyidir")
    .setThumbnail("http://fantasyva.com/wp-content/uploads/2017/08/new-sign-ID-33314.png")
    .setColor(0x00AE86)
    .addField('Seviye Atlamaya Ne Dersin!', `Artık yazdığınız mesajlar size xp olarak dönecek. Böylece ne kadar fazla mesaj yazarsanız o kadar level atlayacaksınız. Aman ha dikkat, boş yapmayın **ban**lanabilirsiniz (!).`)
    .addField("**-level**:", "Seviyenizi ve ne kadar mesaj gönderdiğinizi gösterir.")
    message.author.send(embed);

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
