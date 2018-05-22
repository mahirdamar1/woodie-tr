const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setDescription("Yenilik her zaman iyidir")
    .setThumbnail("http://fantasyva.com/wp-content/uploads/2017/08/new-sign-ID-33314.png")
    .setColor(0x00AE86)
    .addField('-ascii:', `Mesajınızı ascii formatına çevirir (-ascii <mesaj>)`)
    .addField('-öneri', "Tavsiye ve önerilerinizi bot sahiplerine iletir (-öneri <öneriniz>)")
    .addField('-çeviri:', `Mesajınızı istenilen dile çevirir (-çeviri <dil> <mesaj>)`)
    .addField('-discrim', "Belirtilen TAG'a sahip kullanıcıları bulur(-discrim <TAG>")
    .addField('-hespala', "Belirtilen işlemi yapar (-hesapla <işlem>)")
    .addField('-lyrics', "Belirtilen müziğin sözlerini bulur (-lyrics <müzik>)")
    .addField('-pokemon', "Belirtilen pokemon hakında bilgi verir (-pokemon <pokemon>)")
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
