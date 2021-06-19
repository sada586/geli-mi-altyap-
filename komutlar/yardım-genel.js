const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let genel = new Discord.MessageEmbed()  
.setColor('GREEN') 
.setAuthor(`Ovanakovic Genel Komutlar Menüsü`, client.user.avatarURL())
.addField(`__Komut Sayısı__`,`\`${prefix}komutlar\`\n Botun Komut Sayısını Gösterir`,true)
.addField(`__Davet Et__`,`\`${prefix}davet\`\n Botu Davet Edersiniz`,true)
.addField(`__Bot Bilgi__`,`\`${prefix}botbilgi\`\n Bot İstatistiklerini Gösterir`,true)
.addField(`__Bot Shard__`,`\`${prefix}shard\`\n Shard Bilgilerini Gösterir`,true)
.addField(`__Profil__`,`\`${prefix}profil\`\n Kullanıcı Profilinizi Gösterir`,true)
.addField(`__Oylama__`,`\`${prefix}oylama\`\n Sunucuda Oylama Başlatır`,true)
.addField(`__Duyuru__`,`\`${prefix}duyuru\`\n Sunucuda Duyuru Yapar`,true)
.addField(`__Bilgilendirme__`,`\`${prefix}davet\` | Beni Sunucunuza Davet Edersiniz\n\`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n\`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://cdn.discordapp.com/attachments/797498771788660747/832245310537334835/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(genel) 
  };
exports.config = {
name: "genel",
  aliases: []
}
