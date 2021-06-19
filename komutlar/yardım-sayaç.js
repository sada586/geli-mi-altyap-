const db = require("quick.db");
const Discord = require('discord.js');
const akardiyan = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix 
let sayaç = new Discord.MessageEmbed()  
.setAuthor(`Ovanakovic Sayaç Menüsü`, client.user.avatarURL())
.setColor('GREEN')
.addField(`__Sayaç Ayarla__`,`\`${prefix}sayaç-ayarla\`\n Sunucunuzda Sayacı Ayarlar.`,true)
.addField(`__Sayaç Mesaj Ayarla-HG__`,`\`${prefix}sayaç-hg-mesaj\`\n Sunucunuzdaki Sayacın Hoş Geldin Mesajını Ayarlar.`,true)
.addField(`__Sayaç Mesaj Ayarla-BB__`,`\`${prefix}sayaç-bb-mesaj\`\n Sunucunuzdaki Sayacın Görüşürüz Mesajını Ayarlar.`,true)
.addField(`__Bilgilendirme__`,`\`${prefix}davet\` | Beni Sunucunuza Davet Edersiniz\n\`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n\`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://cdn.discordapp.com/attachments/797498771788660747/832245310537334835/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(sayaç) 
  };
exports.config = {
name: "sayaç",
  aliases: []
}