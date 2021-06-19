const db = require("quick.db");
const Discord = require('discord.js');
const akardiyan = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix 
let kayıtsistemi = new Discord.MessageEmbed()  
.setColor('GREEN') 
.setAuthor(`Ovanakovic Kayıt Menüsü`, client.user.avatarURL())
.addField(`__Kanal Ayarla__`,`\`${prefix}kayıt-kanal-ayarla\`\n Kayıt Ol Komutunun Kullanılacağı Kanalı Belirler`,true)
.addField(`__Kayıt Log__`,`\`${prefix}kayıt-log-kanal-ayarla\`\n Kayıt Ol Komutunun Denetim Kaydı Kanalını Belirler`,true)
.addField(`__Kayıt Ol__`,`\`${prefix}kayıt-ol\`\n  Kayıt Kanalında Kayıt Olmanızı Sağlar`,true)
.addField(`__Verilecek Rol__`,`\`${prefix}kayıt-verilecek-rol-ayarla\`\n Kayıt Ol Komutunu Kullandıktan Sonra Verilecek Rolü Belirler`,true)
.addField(`__Alınacak Rol__`,`\`${prefix}kayıt-alınacak-rol-ayarla\`\n Kayıt Ol Komutunu Kullandıktan Sonra Alınacak Rolü Belirler`,true)
.addField(`__Giriş Sistemi__`,`\`${prefix}giriş-sistemi\`\n Kayıt Kanalına Atılacak Mesajı Ayarlar`,true)
.addField(`__İsim Sistem__`,`\`${prefix}isim-sistem\`\n Kayıt Ol Komutunu Kullandıktan Sonra Verilecek İsmi Belirler`,true)
.addField(`__Kayıt Sistemi Kapat__`,`\`${prefix}kayıt-sistemi-kapat\`\n Kayıt Sistemini Tamamen Kapatır`,true)
.addField(`__Bilgilendirme__`,`\`${prefix}davet\` | Beni Sunucunuza Davet Edersiniz\n\`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n\`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://cdn.discordapp.com/attachments/797498771788660747/832245310537334835/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(kayıtsistemi) 
  };
exports.config = {
name: "kayıtsistemi",
  aliases: []
}
