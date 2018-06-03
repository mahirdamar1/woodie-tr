const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');
const slots = ['🍇', '🍊', '🍐', '🍒', '🍋'];

exports.run = function(client, msg) {

		const slotOne = slots[Math.floor(Math.random() * slots.length)];
		const slotTwo = slots[Math.floor(Math.random() * slots.length)];
		const slotThree = slots[Math.floor(Math.random() * slots.length)];
		
		const slots1 = slots[Math.floor(Math.random() * slots.length)];
		const slots2 = slots[Math.floor(Math.random() * slots.length)];
		const slots3 = slots[Math.floor(Math.random() * slots.length)];
		
		const slot1 = slots[Math.floor(Math.random() * slots.length)];
		const slot2 = slots[Math.floor(Math.random() * slots.length)];
		const slot3 = slots[Math.floor(Math.random() * slots.length)];
		
		
		if (slotOne === slotTwo && slotOne === slotThree) {
			return msg.channel.send(stripIndents`
			**| :slot_machine:  SLOTS |**
			**------------------**
			**${slots1} : ${slots2} : ${slots3}**
			**${slotOne} : ${slotTwo} : ${slotThree} <=**
			**${slot1} : ${slot2} : ${slot3}**
			**------------------**
				Wow! İyi iş... hmm.. şanslı!
			`);
		}else if (slots1 === slots2 && slots1 === slots3) {
			return msg.channel.send(stripIndents`
			**| :slot_machine:  SLOTS |**
			**------------------**
			**${slots1} : ${slots2} : ${slots3} <=**
			**${slotOne} : ${slotTwo} : ${slotThree} **
			**${slot1} : ${slot2} : ${slot3}**
			**------------------**
				Wow! İyi iş... hmm.. şanslı!
			`);
		}else if (slot1 === slot2 && slot1 === slot3) {
			return msg.channel.send(stripIndents`
			**| :slot_machine:  SLOTS |**
			**------------------**
			**${slots1} : ${slots2} : ${slots3}**
			**${slotOne} : ${slotTwo} : ${slotThree}**
			**${slot1} : ${slot2} : ${slot3} <=**
			**------------------**
				Wow! İyi iş... hmm.. şanslı!
			`);
		}else {
			return msg.channel.send(stripIndents`
			**| :slot_machine:  SLOTS |**
			**------------------**
			**${slots1} : ${slots2} : ${slots3}**
			**${slotOne} : ${slotTwo} : ${slotThree}**
			**${slot1} : ${slot2} : ${slot3}**
			**------------------**
			Aww... Kaybettin... Kötü şans, ha?
		`);
		};
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'slots', 
  description: 'Slots oyunu oynar',
  usage: 'slots'
};
