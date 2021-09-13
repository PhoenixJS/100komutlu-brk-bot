const Discord = require("discord.js");

const client = new Discord.Client();

exports.run = (client, message, args) => {

message.channel.send("Balık Tuttun Balığı Çekiyorsun..").then(message => {

    var motion = [
      

      "``Sazan Tuttun!`` :fish:",

      "``Köpek Balığı Tuttun İyi Para Eder Sat Sat`` :D",

      "``Uskumru Tuttun!`` :fish:",

      "``Mezgit Tuttun! Havyarıda Var Hee`` :) :fish:",

      "``Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?``",

      "``Hamsi Tuttun!`` :fish:",

      "``Levrek Tuttun!`` :fish:",

      "``Hiçbirşey Tutamadın Maalesef!`` :wastebasket:",

      "``Alabalık Tuttun!`` :fish:",
      
      "``Oha Balina Tuttun! :D`` :fish:",

      "``Maalesef Balık Oltadan Kaçtı!`` :wastebasket:",

      "``Ayakkabı Tuttun Çok Güzel Yemek Olr!`` :boot:"

    ];

    var motion = motion[Math.floor(Math.random() * motion.length)];

    message.edit(`${motion}`);

  });

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["balık", "balıktut"],

  permLevel: 0

};

exports.help = {

name: "balık-tut",

  description: "Balık Tutarsın.",

  usage: "balıktut"

};