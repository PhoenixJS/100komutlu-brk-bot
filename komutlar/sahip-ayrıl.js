const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
  if (message.author.id !== "751717933700349972") return message.reply(':no_entry: Sahibim Sen Değilsin');
   message.channel.send('İstediğin Sunucudan Ayrıldım **Sahibim**');
   message.guild.leave()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ayrıl'],
  permLevel: 4,
  kategori: "yapımcı"
};

exports.help = {
  name: 'ayrıl',
  description: 'Bot Sunucudan Ayrılır.',
  usage: 'ayrıl'
};