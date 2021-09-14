const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {
let prefix = ayarlar.prefix
const yardım = new Discord.MessageEmbed()
.setColor("f6ff00")
.setAuthor(`Eğlence`)
.setTitle(" Eğlence Bot yardım menüsüne hoşgeldin! ")
 .setTimestamp()
.addField(`**${prefix}atatürk**`,"Bunu neden kendin denemiyorsun? :infinity:")
.addField(`**${prefix}balık-tut**`,"Balık tutarsınız :fishing_pole_and_fish:")
.addField(`**${prefix}duello**`,"Birsinle duello atarsanız :crossed_swords:")
.addField(`**${prefix}efkar**`,"Efkarınızı ölçersiniz :champagne_glass:")
.addField(`**${prefix}korona**`,"Korona günlük son dakika verileri :mask:")
.addField(`**${prefix}yazdır**`,"Bota yazı yazdırırısınız. :pencil:")
.addField(`**${prefix}şekerye**`,"Şekerin tadı güzel mi Aykut Abe :D :candy:")
.addField(`**${prefix}dans-et**`,"Mükemmel bir dans edersiniz. :people_wrestling:")
.addField(`**${prefix}hesapla**`,"Basit bir matematik işlemi hesaplatırsınız. :computer:")
.addField(`**${prefix}ara155**`,"Polis gelir. :police_officer:")
.addField(`**${prefix}ara112**`,"Ambulans gelir. :scientist:")
.addField(`**${prefix}ara110**`,"İtfaiye gelir. :firefighter:")
.addField(`**${prefix}hacının-şalgamı**`,"Hacının şalgamı, içen bilir!. :wine_glass:")
.setThumbnail(message.author.avatarURL({dynamic : true}))
message.channel.send(yardım)
} 
exports.conf = {
  enabled: true,
  guildOnly: false,
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}