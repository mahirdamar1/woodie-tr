const Discord = require("discord.js");
const botconfig = require("../botconfig");
const fs = require('fs');
let purple = botconfig.purple;
let xp = require("../xp.json");



exports.run = async (bot, message, args) => {
  const userData = JSON.parse(fs.readFileSync('Storage/userData.json', "utf8"));

  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
  };
}
  let curxp = xp[message.author.id].xp;
  let curmes = userData[message.author.id].messagesSent
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;

  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor(purple)
  .addField("Seviye", curlvl, true)
  .addField("XP", curxp, true)
  .addField("Toplam Gönderilen Mesaj:", curmes, true)
  .setFooter(`Seviye atlamana ${difference} XP kaldı`, message.author.displayAvatarURL);

  message.channel.send(lvlEmbed);

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
  };
  
  exports.help = {
    name: 'level',
    description: 'seviyenizi gösterir.',
    usage: 'level'
  };
  