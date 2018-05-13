const Discord = require('discord.js');
 const client = new Discord.Client();
const Manager = new Discord.ShardingManager('app.js');
Manager.spawn(4);
Manager.on('başlatma:', shard => console.log(`Shard ${shard.id} aktif!`));

client.on('guildMemberAdd', member => {
  if (member.guild.id =='331846231514939392') {
    const embed = new Discord.RichEmbed()
    .setTitle('HOŞGELDİN')
    .setDescription(`:wave: ${member.user.username}!\nARAMIZA HOŞGRLDİN`)
    .setColor(0xFFB200)
client.channels.find('id', '331846231514939392').send({embed});
} else {
if (member.guild.id =='331846231514939392') {
  const embed = new Discord.RichEmbed()
  .setTitle("aramıza hoşgeldin!")
  .setDescription(`:wave: merhaba ${member.user.username}!\naramıza hoşgeldin`)
  .setColor(0xFFB200)
client.channels.find('id', '331846231514939392').send({embed});
} else {
    return;
}
}
});
