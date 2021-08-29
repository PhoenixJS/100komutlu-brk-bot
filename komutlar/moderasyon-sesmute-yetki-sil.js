const data = require('croxydb')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) 
return message.channel.send(new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL({dynamic:true}))
.setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif')
.setTitle('Bir hata oldu!')
.setColor("RED")
.setDescription(`Bu komutu kullanmak için gerekli yetkiye sahip değilsiniz.`))
  
data.delete(`ses.muteyetki.role.${message.guild.id}`);
  message.channel.send(new Discord.MessageEmbed()
  .setTitle('Başarılı!')
  .setColor("GREEN")
  .setThumbnail(message.author.avatarURL({dynamic:true}))
  .setDescription(`Ayarlanmış sesli yetkili rolü başarıyla silindi.`));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ses-muteyetki-sil',
};