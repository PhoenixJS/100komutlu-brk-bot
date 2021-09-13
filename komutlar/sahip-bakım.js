const Discord = require('discord.js')
const db = require("croxydb");
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
let prefix = ayarlar.prefix
  
  if(message.author.id != "751717933700349972") return //Bot sahip id
  
  if(!args[0]) return message.channel.send(`**Bakım modunu açmak için ${prefix}bakım aç**`)
  
  if(args[0] === 'aç') {
    if(db.fetch(`bakim`)) return message.channel.send('**Bakım modu zaten açık**')
    message.channel.send(' | **Bakım modu açıldı.**')
    db.set(`bakim`, 'acik')
  }
  if(args[0] === 'kapat'){
    if(!db.fetch(`bakim`)) return message.channel.send('**Bakım modu zaten kapalı.**')
    message.channel.send('| **Bakım modu kapatıldı.**')
    db.delete(`bakim`)
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'bakım'
}


///////////////////////////////////////

/////////////