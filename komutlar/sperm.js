const Discord = require('discord.js');


exports.run = (client, message) => {
	
	  var cumleler = ['1' ,'2' , '3' , '4' , '5',  '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99',`MAXIMUM KALİTE`];
      var cumle2 = cumleler[Math.floor(Math.random() * cumleler.length)];
	  
	  var cumle1 = ['eh işte','ooo fişeqq','güzel', 'kaliteli', 'bayat']
	  var cumle3 = cumle1[Math.floor(Math.random() * cumle1.length)];
	
	const embed = new Discord.RichEmbed()
		.setAuthor(message.author.tag)
		.setDescription('Sperm yüzden: **%' + cumle2 + '**')
		.addField('Sperm Kaliten', cumle3, true)
		.setImage('https://media1.giphy.com/media/3o7TKRjAZmzVTamP9S/giphy.gif')
		
		message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sperm',
  description: 'Sperm durumunuzu gösterir.',
  usage: 'sperm'
};
