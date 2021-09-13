const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
const db = require("croxydb");
exports.run = async (client, message, args) => { 
let prefix = fynx.prefix
    let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
     const westraben = new Discord.MessageEmbed()
      .setColor("#f6ff00")
       .setDescription(`**${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/kqaBAxkkuX) gelebilirsin!`)
         if(karaliste) 
             return message.channel.send(westraben)
  if(db.fetch(`bakim`)) {
    const bakim = new Discord.MessageEmbed()
      .setColor("#f6ff00")
      .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
        .setTitle('Üzgünüm Bot Bakımda')
          .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
            .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/kqaBAxkkuX)")
              .setFooter('Üzgünüm...')
                .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
                if(message.author.id != "627803211348312065") return message.channel.send(bakim)
}
let eklenti = new Discord.MessageEmbed()  
.setTitle('BRK Ekonomi Komutları')
  .setDescription(`

**\`.günlük\` - __24 saat aralıkla 2300-2700 arası para kazanırsınız.__**

**\`.hediyem\` - __12 saat aralıkla 5000-6000 arası para kazanırsınız.__**

**\`.para\` - __Etiketlediğiniz kişinin veya kendi paranızı görürsünüz.__**

**\`.gönder\` - __Etiketlediğiniz kullanıcıya para gönderirsiniz.__**

**\`.soygun\` - __14 dakikada bir soygun yaparsınız.__**

**\`.çalış\` - __Rastgele bir işte çalışıp maaş alırsınız.__**

**\`.yatır\` - __Kendi cüzdanınızdan bankaya para yatırırsınız.__**

**\`.çek\` - __Bankadan kendi cüzdanınıza para çekersiniz.**

**\`.çal\` - __Etiketlediğiniz kişinin cüzdanından para çalarsınız.__**

•••••••••

**\`.bahis\` - __Bahis oynarsınız, para kaybeder veya 2 katını kazanırsınız.__**

**\`.balık-tut\` - __Balık tutarsınız, rastgele para kazanırsınız veya kaybedersiniz.__** 


 `)
.setColor('f6ff00')
 message.channel.send(eklenti) 
   };
     exports.conf = {
         enabled: true,  
             guildOnly: false, 
                 aliases: ["moderasyon","ayarlar"], 
                     permLevel: 0
                       };
                         exports.help = {
                             name: 'ekonomi'
                               }; 
                                 