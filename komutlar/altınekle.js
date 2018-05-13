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


// Check if they defined an amount
if (!args[0]) {
    message.channel.send(`**Bir altın miktari belirt. Kullanımı: ${lele}altınekle <miktar> <kullanıcı>**`);
    return;
}

// We should also make sure that args[0] is a number
if (isNaN(args[0])) {
    message.channel.send(`**Miktar bir sayı olmalı. Kullanımı: ${lele}altınekle <miktar> <kullanıcı>**`);
    return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
}

// Check if they defined a user
let defineduser = '';
if (!args[1]) { // If they didn't define anyone, set it to their own.
    defineduser = message.author.id;
} else { // Run this if they did define someone...
    let firstMentioned = message.mentions.users.first();
    defineduser = firstMentioned.id;
}

// Finally, run this.. REMEMBER IF you are doing the guild-unique method, make sure you add the guild ID to the end,
economy.updateBalance(defineduser, parseInt(args[0])).then((i) => { // AND MAKE SURE YOU ALWAYS PARSE THE NUMBER YOU ARE ADDING AS AN INTEGER
    message.channel.send(`**${args[0]} Altın kullanıcıya aktarıldı.**`)
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'altınekle',
  description: 'İstediğiniz kişiye altın ekler.',
  usage: 'altınekle <miktar> <kullanıcı>'
};
