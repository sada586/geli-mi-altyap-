const db = require("quick.db");
const Discord = require('discord.js');
const akardiyan = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('GREEN') 
.setAuthor(`Ovanakovic Eklenti Komutları Menüsü`, client.user.avatarURL())
.addField(`__Kayıt Sistemi__`,`\`${prefix}kayıtsistemi\`\n Gelişmiş Kayıt Sistemi`,true)
.addField(`__Davet Sistemi__`,`\`${prefix}davetsistemi\`\n Gelişmiş Davet Sistemi`,true)
.addField(`__Bilgilendirme__`,`\`${prefix}davet\` | Beni Sunucunuza Davet Edersiniz\n\`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n\`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://cdn.discordapp.com/attachments/797498771788660747/832245310537334835/standard.gif`)
.setThumbnail(client.user.avatarURL)
message.channel.send(eklenti) 
  };
exports.config = {
name: "eklenti",
  aliases: ['eklenti']
}
