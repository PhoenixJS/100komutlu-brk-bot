const Discord = require('discord.js');
exports.run = async(client, message) => {
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Mustafa Kemal Atatürkü Anıyoruz.')
    .setColor(3447003)
    .setImage(`https://i.hizliresim.com/8CIYMl.gif`)
    return message.channel.send(vatan);
} //mrk
  //coders area
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ata','atamız'],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: '',
  usage: ''
};