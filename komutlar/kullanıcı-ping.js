const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (app, message, client) => {
  const erensy319= new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("⚙️ **Ping Hesaplanıyor...**");

  let erensss = Date.now();
  let erenscode= await message.channel.send(erensy);
  let erensycoddee = Date.now() - erenss;
  let erensyAPI = app.ws.ping.toFixed(2);
  setInterval(() => {
    const erensembed = new Discord.MessageEmbed()
      .setDescription(
        `\n 💬  Mesaj Gecikme Süresi ; **${erensycoddee}Ms** \n\n 👁‍🗨 Bot Gecikme Süresi ; **${erensyAPI}Ms**`
      )
      .setColor("RANDOM");
    erensycode.edit(erensembed);
  }, 5000);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ping"],
  permLevel: 0
};

exports.help = {
  name: "ping",
  description: "Ping komutu işte yaw",
  usage: "ping"
};