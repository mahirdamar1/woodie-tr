const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const ayarlar = require('../ayarlar.json');
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;

var prefix = ayarlar.prefix;


module.exports.run = async (bot, message, args) => {
    message.delete();
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Şikayet")
    .setColor(orange)
    .addField("Şüpheli", `${rUser} ID: ${rUser.id}`)
    .addField("Mağdur", `${message.author} ID: ${message.author.id}`)
    .addField("Kanal", message.channel)
    .addField("Zaman", message.createdAt)
    .addField("Sebep", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("**reports** kanalını bulamıyorum.");
    reportschannel.send(reportEmbed);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'report',
  description: 'Kişiyi şikayet eder.',
  usage: 'report <kişi> <sebep>'
};
