const Discord = require('discord.js');

const db = require('quick.db')

const ms = require('ms')

exports.run = async(client, message) => {

//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

  function rastgeleMiktar(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;

} 

//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

let times = await db.fetch(`worktime_${message.author.id}`)

  let day = 43200000

//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

  if (times !== null && day - (Date.now() - times) > 0) {

        let time = ms(day - (Date.now() - times));

    message.channel.send(new Discord.MessageEmbed()

                        .setColor("RED")

                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))

                        .setDescription(`⏱ Hediyeni almak için ${time.hours ? time.hours + " saat,": ""} ${time.minutes ? time.minutes + ' dakika,' : ''} ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'komutu tekrar gir!'}`))

  return

  }

let moneys = rastgeleMiktar(5000,6000);

      message.channel.send(new Discord.MessageEmbed()

                   .setColor("YELLOW")

                   .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))

                   .setDescription(`hediyeni topladın, cüzdanına ${moneys} 💸 eklendi!`))

db.set(`worktime_${message.author.id}`, Date.now())

  db.add(`para_${message.author.id}`, moneys)

    

 };

//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

exports.conf = {

  enabled: true,

  aliases: ["gunluk"],

};

exports.help = {

  name: 'hediyem',

};