
const db = require("quick.db");
const Discord = require('discord.js');
const akardiyan = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix 
let davetsistemi = new Discord.MessageEmbed()  
.setColor('GREEN') 
.setAuthor(`Ovanakovic Davet Sistemi Menüsü`, client.user.avatarURL())
.addField(`__Davet Kanal__`,`\`${prefix}davet-kanal\`\n Sunucunuzda Kaç Kişinin Ne Kadar Daveti Olduğunu Gösteren Kanalı Ayarlar`,true)
.addField(`__Kanal Sıfırla__`,`\`${prefix}davet-kanal-sıfırla\`\n Sunucunuzda Kaç Kişinin Ne Kadar Daveti Olduğunu Gösteren Kanalı Sıfırlar`,true)
.addField(`__Davet Ekle__`,`\`${prefix}davet-ekle\`\n Etiketlediğiniz Kişinin Davet Sayısını Arttırır`,true)
.addField(`__Davetlerim__`,`\`${prefix}davetlerim\`\n Sunucuda Kaç Davetiniz Olduğunu Gösterir`,true)
.addField(`__Davet Rütbe Ekle__`,`\`${prefix}rütbe-ekle\`\n Sunucunuzda Davet Sayısına Göre Rol Verme Sistemine Rol Ekler`,true)
.addField(`__Rütbe Sil__`,`\`${prefix}rütbe-sil\`\n Sunucunuzda Davet Sayısına Göre Rol Verme Sisteminden Rol Siler`,true)
.addField(`__Bilgilendirme__`,`\`${prefix}davet\` | Beni Sunucunuza Davet Edersiniz\n\`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n\`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://cdn.discordapp.com/attachments/797498771788660747/832245310537334835/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(davetsistemi) 
  };
exports.config = {
name: "davetsistemi",
  aliases: []
}
