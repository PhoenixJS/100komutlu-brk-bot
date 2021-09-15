const Discord = require("discord.js");
const db = require("quick.db");
const moment = require('moment')
const os = require('os')
exports.run = async (app, message, client) => {
  const erensy319= new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("⚙️ **Ping Hesaplanıyor...**");

  let erensss = Date.now();
  let erenscode= await message.channel.send(erensy319);
  let erensycoddee = Date.now() - erensss;
  let erensyAPI = app.ws.ping.toFixed(2);
  setInterval(() => {
    const erensembed = new Discord.MessageEmbed()
      
    
             .addField(
      	                        "» **Sahibim**","<@751717933700349972>",true
      	                          )
      	                              .addField(
      	                                    "» **Devs**" ,"<@751717933700349972> <@845035147492589639>",true
      	                                         ) 
      	                                          .addField(
      	                                                "» **Bellek kullanımı**",
      	                                                      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      	                                                            true
      	                                                                )
      	                                                                    .addField(
      	                                                                          "» **Çalışma süresi**",
      	                                                                                moment
      	                                                                                        .duration(client.uptime)
      	                                                                                                .format(" D [gün], H [saat], m [dakika], s [saniye]")
      	                                                                                                    )
  .addField("» **Müzik Oynatılan Sunucu Sayısı**", client.voice.connections.size, true)
      .addField(
            "» **Kullanıcılar**",
                  client.guilds.cache
                          .reduce((a, b) => a + b.memberCount, 0)
                                  .toLocaleString(),
                                        true
                                            )
                                                .addField(
                                                      "» **Sunucular**",
                                                            client.guilds.cache.size.toLocaleString(),
                                                                  true
                                                                      )
                                                                          .addField(
                                                                                "» **Kanallar**",
                                                                                      client.channels.cache.size.toLocaleString(),
                                                                                            true
                                                                                                )
                                                                                                    .addField(
                                                                                                          "» **Komut Sayısı**",
                                                                                                                client.commands.size,
                                                                                                                      true
                                                                                                                           )
                                                                                                                               .addField("» **Discord.JS sürüm**", "v" + Discord.version, true)
                                                                                                                                   .addField("» **Node.JS sürüm**", `${process.version}`, true)
                                                                                                                                       .addField("» **Ping**", client.ws.ping + " ms", true)
                                                                                                                                           .addField(
                                                                                                                                                 "» **CPU**",
                                                                                                                                                       `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``
                                                                                                                                                           )
                                                                                                                                                               .addField("» **Bit**", `\`${os.arch()}\``, true)
    .addField("» **İşletim Sistemi**", `\`\`\`windows\`\`\``)
        .addField("**➥ Linkler**", "**[Davet Linki](https://discord.com/oauth2/authorize?client_id=877628391031988266&scope=bot&permissions=82779938739883793937739)**\n **[Destek Sunucu](https://discord.gg/tahsineren)**\n**[Website= YAKINDA]()**")
      
      .setColor("RANDOM");
    erenscode.edit(erensembed);
  }, 5000);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ping"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Ping komutu işte yaw",
  usage: "ping"
};